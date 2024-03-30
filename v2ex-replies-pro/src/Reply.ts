import V2ex from "./api/V2ex"

export default class Reply {

  private static winbox: any

  static async run() {
    if (location.href.indexOf('v2ex.com/t/') === -1) {
      return
    }
    // 检查 Token
    if (!await V2ex.checkToken()) {
      return
    }

    const
      selector = {
        // 回复数
        repliesNumber: '#Main > .box:eq(1) .gray',
        // 回复
        repliesDiv: '#Main > .box:eq(1) div[id^="r_"]',
        // @ 链接
        atLinks: '.reply_content a[href^="/member/"]',
        // 点击的回复
        clickedReply: '.clicked-reply',
        // 讨论弹窗
        taSay: '.ta-say',
        // 讨论弹窗的标题
        taSayDrag: '.ta-say .wb-drag',
        // 讨论弹窗的内容
        taSayBody: '.ta-say .wb-body',
        // 讨论弹窗的回复
        taSayRepliesDiv: '.ta-say .wb-body div[id^="r_"]'
      },
      $body = $(document.body), $head = $(document.head),
      $repliesNumber = $(selector.repliesNumber),
      $atLinks = $(selector.atLinks)
    // 回复内容匹配器
    const replyContentUsernameMatcher = /@<a href="\/member\/.+?">(.+?)<\/a>/

    // 根据回复数获取所有回复
    const repliesNumber = $repliesNumber.text().substring(0, $repliesNumber.text().indexOf('条'))
    const replies = []
    for (let i = 1; i <= Math.ceil(Number(repliesNumber) / 20); i++) {
      replies.push(...await V2ex.getReplies(topicId, i))
    }

    // 最后一个回复加上底边框
    $(selector.repliesDiv + ':eq(-1)').css('border-bottom', $(selector.repliesDiv + ':eq(-2)').css('border-bottom'))

    // 用户和 @用户的回复的 HTML：{'用户名': ['用户的回复 HTML', '@用户的回复 HTML']}
    const userAndAtUserReplyHtml = {}
    // 循环 @用户名，获取他的回复和艾特他的回复
    for (const atLink of $atLinks.toArray()) {
      const username = $(atLink).text()

      userAndAtUserReplyHtml[username] = []
      for (const reply of replies) {
        // 回复的用户 != @用户名 && 回复内容中的 @用户名 != @用户名，跳过
        if (reply.member.username != username && reply.content_rendered.match(replyContentUsernameMatcher)?.[1] != username) {
          continue
        }
        const replyId = reply.id
        const replyHtml = $('#r_' + replyId).prop('outerHTML'), $replyHtml = $(replyHtml)

        // 修改 html 的 id，追加 _1
        $replyHtml.attr('id', $replyHtml.attr('id') + '_1')
        // 如果 html 中的 a 链接没有 target 属性或 target 属性不为 _blank，则添加 target="_blank"
        $replyHtml.find('a').each((i, a) => {
          if (!a.target || a.target !== '_blank') {
            a.target = '_blank'
          }
        })
        userAndAtUserReplyHtml[username].push($replyHtml.prop('outerHTML'))
      }
    }

    // 添加弹窗样式
    $head.append(`<style>
      ${selector.clickedReply} {
        border: 2px solid !important;      
      }
      ${selector.taSay} {
        border-shadow: 0 14px 12px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%) !important
      }
      ${selector.taSayDrag} {
        background-color: #e2e2e2 !important;
        color: #666
      }
      ${selector.taSayBody} {
        padding-bottom: 10px
      }
    </style>`)

    // 循环 @用户名
    for (const atLink of $atLinks.toArray()) {
      const $atLink = $(atLink)

      // @用户名点击时显示讨论弹窗
      $atLink.on('click', (e) => {
        e.preventDefault()

        // 如果已经打开了讨论弹窗，跳过


        // 移除之前加粗的回复的边框
        $(selector.clickedReply).removeClass(selector.clickedReply.substring(1))
        // 加粗点击 @用户名的那条回复的边框
        const $cell = $atLink.parents('.cell')
        $cell.addClass(selector.clickedReply.substring(1))
        // 跳转到那条回复
        $('html,body').animate({scrollTop: $cell.offset().top - $(window).height() / 2}, 500);

        const username = $atLink.text()
        if (Reply.winbox) {
          Reply.winbox.close()
        }
        Reply.winbox = new WinBox({
          class: selector.taSay.substring(1),
          title: `${username} 在讨论……`,
          x: localStorage.getItem('ta_say_x') || 'right',
          y: localStorage.getItem('ta_say_y') || 'bottom',
          width: localStorage.getItem('ta_say_width') || '540px',
          height: localStorage.getItem('ta_say_height') || '70%',
          html: `${userAndAtUserReplyHtml[username].join('')}`,
          onresize: (width, height) => {
            // 改变窗口大小时记录窗口大小
            localStorage.setItem('ta_say_width', width + 'px');
            localStorage.setItem('ta_say_height', height + 'px');
          },
          onmove: (x, y) => {
            // 移动窗口时记录窗口位置
            localStorage.setItem('ta_say_x', x);
            localStorage.setItem('ta_say_y', y);
          }
        })

        // 弹窗中加粗点击 @用户名的那条回复的边框
        const $cell1 = $(`#${$cell.attr('id')}_1`)
        $cell1.addClass(selector.clickedReply.substring(1))
        // 跳转到那条回复
        $(selector.taSayBody).animate({scrollTop: $cell1.offset().top - $(selector.taSayBody).offset().top - $(selector.taSayBody).height() / 2}, 500);
      })
    }
    layer.msg('回复增强成功', {icon: 1/*, offset: 'rb'*/})
  }
}
