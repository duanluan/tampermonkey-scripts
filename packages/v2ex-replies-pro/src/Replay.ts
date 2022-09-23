import V2ex from './api/V2ex';
import Info from 'utils/src/gm/Info';
import moment from 'moment';
import WinBox from 'winbox';
import $ from 'jquery';

export default class Replay {
  private static winbox: WinBox | null;

  static async run() {
    if (location.href.indexOf('v2ex.com/t/') === -1) {
      return;
    }

    // 检查 Token
    if (!(await V2ex.checkToken())) {
      return;
    }

    const selector = {
        // 回复列表
        repliesBox: '#Main .box:eq(1)',
        // 所有回复
        allReplies: '#Main .box:eq(1) .cell:not(:eq(0))',
        // 回复数
        repliesNumber: '#Main .box:eq(1) .gray',
        // OP 名
        opUserName: '.header .gray a:eq(0)',
        // @ 链接
        atLink: '.at-link',
        // 右侧内容
        taSay: '.ta-say',
      },
      $body = $(document.body),
      $head = $(document.head),
      $allReplies = $(selector.allReplies),
      $repliesNumber = $(selector.repliesNumber),
      $opUserName = $(selector.opUserName);

    // 添加弹窗样式
    $head.append(`<style>
      .winbox${selector.taSay} {
        border-shadow: 0 14px 12px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%) !important;
      }
      .winbox${selector.taSay} .wb-drag {
        background-color: #e2e2e2;
        color: #666;
      }
    </style>`);

    // 隐藏原回复
    $allReplies.hide();
    // 获取回复数
    const repliesNumber = $repliesNumber
      .text()
      .substring(0, $repliesNumber.text().indexOf('条'));
    // 获取 OP 名
    const opUserName = $opUserName.text();
    // 获取所有回复
    const replies: any[] = [];
    for (let i = 1; i <= Math.ceil(Number(repliesNumber) / 20); i++) {
      replies.push(...(await V2ex.getReplies(topicId, i)));
    }

    // 清空数据库
    const db = openDatabase(
      'v2ex-replies-pro',
      '0.0.1',
      Info.getName(),
      10 * 1024 * 1024
    );
    db.transaction(
      (tx: { executeSql: (arg0: string) => void }) => {
        tx.executeSql(`drop table if exists rendered_replies`);
      },
      (_error: any) => {},
      () => {
        start();
      }
    );

    const start = () => {
      for (let i = 0; i < replies.length; i++) {
        const reply = replies[i],
          replyId = reply.id,
          created = reply.created,
          created1 = Number(created + '000'),
          createdFormat = moment(created1).format('YYYY-MM-DD HH:mm:ss'),
          createdAgo = moment(created1).fromNow(),
          member = reply.member,
          username = member.username,
          avatar = member.avatar,
          replyDivId = 'r_' + replyId,
          $replyDivId = $('#' + replyDivId),
          // 点赞数
          $fade = $replyDivId.find('.fade'),
          fadeHtml = $fade.length === 0 ? '' : $fade.prop('outerHTML');

        // 删除原回复
        $replyDivId.remove();

        let contentRendered = reply.content_rendered,
          atSearchStartIndex = 0;
        // 可能会 @ 多个人
        const atSearchStr = '@<a href="/member/';
        while (true) {
          let atLinkIndex = contentRendered.indexOf(
            atSearchStr,
            atSearchStartIndex
          );
          if (atLinkIndex === -1) {
            break;
          }
          // 获取 @ 的用户名
          let atUsername = contentRendered.substring(
            atLinkIndex + atSearchStr.length,
            contentRendered.indexOf('">', atLinkIndex)
          );
          // 回复内容，其中 @ 链接添加了 class 和 @ 的用户名传递
          const replaceStr = `@<a class="${selector.atLink.substring(
            1
          )}" data-reply-div-id="${replyDivId}" data-username="${atUsername}" data-created="${created}" onclick="return false;" href="/member/${atUsername}`;
          contentRendered = contentRendered.replaceAll(
            `@<a href="/member/${atUsername}`,
            replaceStr
          );
          atSearchStartIndex = atLinkIndex + replaceStr.length;
        }

        const html = `
          <!-- 此处的 style 为模仿 .cell 样式 -->
          <div id="${replyDivId}" style="font-size: 14px; line-height: 150%; border-bottom: 1px solid #e2e2e2">
            <div style="display: flex;">
              <div style="display: flex; flex-direction: column; align-items: center; background-color: #fafbfc; padding: 12px 0 10px 0">
                ${
                  username === opUserName
                    ? `
                  <div style="height: 0">
                    <div style="position: relative; left: 44px; top: -12px; background-image: linear-gradient(225deg, #558bf6 23px, #fafbfc 0); width: 32px; height: 32px;">
                      <div class="badges" style="color: white; transform: rotate(45deg); position: relative; top: -1px; right: -5px">OP</div>
                    </div>
                  </div>
                `
                    : ''
                }
                <img src="${avatar}" class="avatar" alt="${username}" style="width: 48px">
                <div style="width: 120px;">
                  <a href="/member/${username}" class="dark">${username}</a>
                </div>
              </div>
              <div style="padding: 10px 10px 10px 12px; width: 100%">
                <div style="display: flex; justify-content: space-between">
                  <div>
                    &nbsp;<span class="ago" title="${createdFormat}">${createdAgo}</span>&nbsp;${fadeHtml}
                  </div>
                  <div>
                    <!-- 此处为原内容保持不变 -->
                    <div id="thank_area_${replyId}" class="thank_area"><a href="#;" onclick="if (confirm('确认要不再显示来自 @${username} 的这条回复？')) { ignoreReply(${replyId}, ${once}); }" class="thank" style="color: #ccc;">隐藏</a> &nbsp; &nbsp; <a href="#;" onclick="if (confirm('确认花费 10 个铜币向 @${username} 的这条回复发送感谢？')) { thankReply(${replyId}); }" class="thank">感谢回复者</a></div> &nbsp; <a href="#;" onclick="replyOne('${username}');"><img src="/static/img/reply_neue.png" align="absmiddle" border="0" alt="Reply" width="20"></a> &nbsp;&nbsp; <span class="no">1</span>
                  </div>
                </div>
                <div style="text-align: left">
                  <span>${contentRendered}</span>
                </div>
              </div>
            </div>
          </div>
        `;

        // 将已渲染的回复保存到 Web SQL 中
        db.transaction(
          (tx: any) => {
            // @formatter:off
            tx.executeSql(
              `create table if not exists rendered_replies (id unique, username, created, html, content_rendered)`
            );
            tx.executeSql(
              `insert or replace into rendered_replies (id, username, created, html, content_rendered) values (?, ?, ?, ?, ?)`,
              [replyId, username, created, html, contentRendered]
            );
            // @formatter:on
          },
          (_error: any) => {},
          () => {
            if (i === replies.length - 1) {
              // updateReplies();
              showReplies();
            }
          }
        );
      }
    };

    /**
     * 展示回复
     */
    const showReplies = () => {
      db.transaction(
        (tx: {
          executeSql: (
            arg0: string,
            arg1: never[],
            arg2: (_tx: any, results: any) => void
          ) => void;
        }) => {
          // @formatter:off
          tx.executeSql(
            `select * from rendered_replies order by created`,
            [],
            (_tx: any, results: { rows: any }) => {
              // @formatter:on
              for (const row of results.rows) {
                $(selector.repliesBox).append(row.html);
              }
              // 给 @ 链接添加点击事件
              $body.on('click', selector.atLink, function () {
                const $this = $(this);
                showTaSay(
                  $this.data('replyDivId'),
                  $this.data('username'),
                  $this.data('created')
                );
              });
            }
          );
        }
      );
    };

    /**
     * 展示 TA 说了什么
     * @param replyDivId 回复的 div id
     * @param username 用户名
     * @param created 创建时间
     */
    const showTaSay = (
      replyDivId: string,
      username: string,
      created: number
    ) => {
      // 关闭弹窗
      Replay.winbox?.close();
      console.log(replyDivId);

      // 高亮点击 @ 链接的那条回复
      const $reply = $('#' + replyDivId);
      $reply.css('border', '2px solid');
      // 跳转到高亮回复
      $('html,body').animate(
        { scrollTop: $reply.offset()!.top - $(window).height()! / 2 },
        500
      );

      db.transaction(
        (tx: {
          executeSql: (
            arg0: string,
            arg1: string[],
            arg2: (_tx: any, results: any) => void
          ) => void;
        }) => {
          // @formatter:off
          tx.executeSql(
            `select * from rendered_replies where username = ? order by created`,
            [username],
            (_tx: any, results: { rows: string | any[] }) => {
              // @formatter:on
              let html = '',
                isGeByPrev = true,
                isHighlighted = false;
              for (let i = 0; i < results.rows.length; i++) {
                const row = results.rows[i];

                let borderStyle = 'border-bottom: 1px solid #e2e2e2;';
                // 在点击回复所在位置高亮
                if (!(created > row.created) && isGeByPrev) {
                  borderStyle += 'border-top: 2px solid';
                  isHighlighted = true;
                } else if (i === results.rows.length - 1 && !isHighlighted) {
                  borderStyle = 'border-bottom: 2px solid';
                }
                html += `
              <div style="${borderStyle}">
                ${$(row.html).find('.ago').parent().prop('outerHTML')}
                <div style="padding-bottom: 5px">${row.content_rendered}</div>
              </div>
            `;
                // 当前条是否为之前的回复，用于下一条判断是否需要高亮
                isGeByPrev = created > row.created;
              }

              Replay.winbox = new WinBox({
                class: selector.taSay.substring(1),
                title: username + ' 说了什么？',
                x: localStorage.getItem('ta_say_x') || 'right',
                y: localStorage.getItem('ta_say_y') || 'bottom',
                width: localStorage.getItem('ta_say_width') || '540px',
                height: localStorage.getItem('ta_say_height') || '70%',
                html: `<div style="padding: 10px; font-size: 14px">${html}</div>`,
                onresize: (width, height) => {
                  // 改变窗口大小时记录窗口大小
                  localStorage.setItem('ta_say_width', width + 'px');
                  localStorage.setItem('ta_say_height', height + 'px');
                },
                onmove: (x, y) => {
                  // 移动窗口时记录窗口位置
                  localStorage.setItem('ta_say_x', x + '');
                  localStorage.setItem('ta_say_y', y + '');
                },
                onclose: () => {
                  // 关闭弹窗时取消回复高亮
                  $reply.css('border', 'none');
                  $reply.css('border-bottom', '1px solid #e2e2e2');
                  Replay.winbox = null;
                  return false;
                },
              });
            }
          );
        }
      );
    };
  }
}
