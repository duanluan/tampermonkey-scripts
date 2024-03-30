import V2ex from "./api/V2ex";

export default class Reply {

  private static winbox: any;

  static async run() {
    if (location.href.indexOf('v2ex.com/t/') === -1) {
      return;
    }

    // 检查 Token
    if (!await V2ex.checkToken()) {
      return;
    }

    const
      selector = {
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
      $body = $(document.body), $head = $(document.head),
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
    const repliesNumber = $repliesNumber.text().substring(0, $repliesNumber.text().indexOf('条'));
    // 获取 OP 名
    const opUserName = $opUserName.text();
    // 获取所有回复
    const replies = [];
    for (let i = 1; i <= Math.ceil(Number(repliesNumber) / 20); i++) {
      replies.push(...await V2ex.getReplies(topicId, i));
    }

    var JsStore;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{API:()=>r,CONNECTION_STATUS:()=>p,Connection:()=>b,DATA_TYPE:()=>o,ERROR_TYPE:()=>l,EVENT:()=>i,IDB_MODE:()=>u,OCCURENCE:()=>a,QUERY_OPTION:()=>s,WORKER_STATUS:()=>n,forObj:()=>q,promise:()=>d,promiseAll:()=>v,promiseResolve:()=>f});var n,o,r,i,s,u,a,p,c=function(){function e(e,t){this.type=e,this._info=t,this.message=this.getMsg()}return e.prototype.throw=function(){throw this},e.prototype.log=function(e){this.status&&console.log(e)},e.prototype.logError=function(){console.error(this.get())},e.prototype.logWarning=function(){console.warn(this.get())},e.prototype.get=function(){return{message:this.message,type:this.type}},e.prototype.getMsg=function(){return this.type,this.message},e}(),l={InvalidUpdateColumn:"invalid_update_column",UndefinedColumn:"undefined_column",UndefinedValue:"undefined_value",UndefinedColumnName:"undefined_column_name",UndefinedDbName:"undefined_database_name",UndefinedColumnValue:"undefined_column_value",NotArray:"not_array",NoValueSupplied:"no_value_supplied",ColumnNotExist:"column_not_exist",NoIndexFound:"no_index_found",InvalidOp:"invalid_operator",NullValue:"null_value",WrongDataType:"wrong_data_type",TableNotExist:"table_not_exist",DbNotExist:"db_not_exist",ConnectionAborted:"connection_aborted",ConnectionClosed:"connection_closed",NotObject:"not_object",InvalidConfig:"invalid_config",DbBlocked:"Db_blocked",IndexedDbNotSupported:"indexeddb_not_supported",NullValueInWhere:"null_value_in_where",InvalidJoinQuery:"invalid_join_query",InvalidQuery:"invalid_query",ImportScriptsFailed:"import_scripts_failed",MethodNotExist:"method_not_exist",Unknown:"unknown",InvalidMiddleware:"invalid_middleware"};(function(e){e.Registered="registerd",e.Failed="failed",e.NotStarted="not_started"})(n||(n={})),function(e){e.String="string",e.Object="object",e.Array="array",e.Number="number",e.Boolean="boolean",e.Null="null",e.DateTime="date_time"}(o||(o={})),function(e){e.InitDb="init_db",e.MapGet="map_get",e.MapSet="map_set",e.MapHas="map_has",e.MapDelete="map_delete",e.Select="select",e.Insert="insert",e.Update="update",e.Remove="remove",e.OpenDb="open_db",e.Clear="clear",e.DropDb="drop_db",e.Count="count",e.ChangeLogStatus="change_log_status",e.Terminate="terminate",e.Transaction="transaction",e.CloseDb="close_db",e.Union="union",e.Intersect="intersect",e.ImportScripts="import_scripts",e.Middleware="middleware"}(r||(r={})),function(e){e.RequestQueueEmpty="requestQueueEmpty",e.RequestQueueFilled="requestQueueFilled",e.Upgrade="upgrade",e.Create="create",e.Open="open"}(i||(i={})),function(e){e.Where="where",e.Like="like",e.Regex="regex",e.In="in",e.Equal="=",e.Between="-",e.GreaterThan=">",e.LessThan="<",e.GreaterThanEqualTo=">=",e.LessThanEqualTo="<=",e.NotEqualTo="!=",e.Aggregate="aggregate",e.Max="max",e.Min="min",e.Avg="avg",e.Count="count",e.Sum="sum",e.List="list",e.Or="or",e.Skip="skip",e.Limit="limit",e.And="and",e.IgnoreCase="ignoreCase",e.Then="then"}(s||(s={})),function(e){e.ReadOnly="readonly",e.ReadWrite="readwrite"}(u||(u={})),function(e){e.First="f",e.Last="l",e.Any="a"}(a||(a={})),function(e){e.Connected="connected",e.Closed="closed",e.NotStarted="not_started",e.UnableToStart="unable_to_start",e.ClosedByJsStore="closed_by_jsstore"}(p||(p={}));var h,d=function(e){return new Promise(e)},f=function(e){return Promise.resolve(e)},_=function(){function e(e){this._events={},this._ctx=e}return e.prototype.on=function(e,t){return null==this._events[e]&&(this._events[e]=[]),this._events[e].push(t),this},e.prototype.off=function(e,t){if(this._events[e])if(t){var n=this._events[e].indexOf(t);this._events[e].splice(n,1)}else this._events[e]=[]},e.prototype.emit=function(e){for(var t=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r=this._events[e]||[],i=0,s=r.length,u=[];return new Promise((function(e){var o=function(){i<s?function(){var e=r[i++];if(e){var o=e.call.apply(e,function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}([t._ctx],n,!1));return o&&o.then?o:Promise.resolve(o)}}().then((function(e){u.push(e),o()})):e(u)};o()}))},e.prototype.destroy=function(){this._events=null,this._ctx=null},e}(),y=function(){function e(e){this.isConOpened_=!1,this.isDbIdle_=!0,this.requestQueue_=[],this.isCodeExecuting_=!1,this.inactivityTimer_=-1e3,this.middlewares=[],this.eventBus_=new _(this),this.whiteListApi_=[r.InitDb,r.OpenDb,r.MapGet,r.MapSet,r.MapHas,r.MapDelete,r.ChangeLogStatus,r.Terminate,r.DropDb],this.isWorker=!0,this.logger=new c(null),e?(this.worker_=e,this.worker_.onmessage=this.onMessageFromWorker_.bind(this)):(this.isWorker=!1,this.initQueryManager_())}return Object.defineProperty(e.prototype,"jsstoreWorker",{get:function(){return this.$worker||self.JsStoreWorker},enumerable:!1,configurable:!0}),e.prototype.initQueryManager_=function(){var e=this.jsstoreWorker;e&&(this.queryManager=new e.QueryManager(this.processFinishedQuery_.bind(this)))},e.prototype.onMessageFromWorker_=function(e){this.processFinishedQuery_(e.data)},e.prototype.processFinishedQuery_=function(e){var t=this.requestQueue_.shift();if(t){if(this.logger.log("request ".concat(t.name," finished")),e.error)t.onError(e.error);else{switch(t.name){case r.OpenDb:case r.InitDb:this.isConOpened_=!0;break;case r.Terminate:this.isConOpened_=!1,!0===this.isWorker&&this.worker_.terminate();case r.DropDb:this.isConOpened_=!1,this.requestQueue_=[],this.isDbIdle_=!0;break;case r.CloseDb:this.isDbIdle_=!0,this.eventBus_.emit(i.RequestQueueEmpty,[]),this.requestQueue_.length>0&&this.openDb_(!1)}t.onSuccess(e.result)}this.isCodeExecuting_=!1,this.executeQry_()}},e.prototype.openDb_=function(e){void 0===e&&(e=!0);var t={name:r.OpenDb,query:{name:this.database.name,version:this.database.version},onSuccess:function(){},onError:function(e){console.error(e)}};e?this.prcoessExecutionOfQry_(t,0):this.requestQueue_.splice(0,0,t)},e.prototype.executeMiddleware_=function(e){var t=this;return d((function(n){var o=0,r=t.middlewares.length-1,i=function(){if(o<=r){var s=t.middlewares[o++](e);s&&s.then||(s=f(s)),s.then((function(e){i()}))}else n()};i()}))},e.prototype.callResultMiddleware=function(e,t){return d((function(n){var o=0,r=e.length-1,i=function(){if(o<=r){var s=e[o++](t);s.then||(s=f(s)),s.then((function(e){t=e,i()}))}else n(t)};i()}))},e.prototype.pushApi=function(e){var t=this;return new Promise((function(n,o){var s=[];e.onResult=function(e){s.push((function(t){return e(t)}))},t.executeMiddleware_(e).then((function(){e.onSuccess=function(o){t.callResultMiddleware(s,o).then((function(e){n(e)})).catch((function(t){e.onError(t)}))},e.onError=function(e){s=[],o(e)},0===t.requestQueue_.length&&(t.eventBus_.emit(i.RequestQueueFilled,[]),t.isDbIdle_&&t.isConOpened_&&([r.InitDb,r.CloseDb,r.DropDb,r.OpenDb,r.Terminate].indexOf(e.name)>=0||t.openDb_()),clearTimeout(t.inactivityTimer_)),t.prcoessExecutionOfQry_(e)})).catch(o)}))},e.prototype.prcoessExecutionOfQry_=function(e,t){this.isDbIdle_=!1,null!=t?this.requestQueue_.splice(t,0,e):this.requestQueue_.push(e),this.logger.log("request pushed: "+e.name),this.executeQry_()},e.prototype.executeQry_=function(){var e=this,t=this.requestQueue_.length;if(!this.isCodeExecuting_&&t>0){if(!0===this.isConOpened_)return void this.sendRequestToWorker_(this.requestQueue_[0]);var n=this.requestQueue_.findIndex((function(t){return e.whiteListApi_.indexOf(t.name)>=0}));n>=0&&(this.requestQueue_.splice(0,0,this.requestQueue_.splice(n,1)[0]),this.sendRequestToWorker_(this.requestQueue_[0]))}else 0===t&&!1===this.isDbIdle_&&this.isConOpened_&&(this.inactivityTimer_=setTimeout((function(){e.prcoessExecutionOfQry_({name:r.CloseDb,onSuccess:function(){},onError:function(e){console.error(e)}})}),100))},e.prototype.sendRequestToWorker_=function(e){this.isCodeExecuting_=!0,this.logger.log("request executing: "+e.name);var t={name:e.name,query:e.query};!0===this.isWorker?this.worker_.postMessage(t):this.queryManager.run(t)},e}(),m=function(){function e(e){this.con=e}return e.prototype.get=function(e){return this.con.pushApi({name:r.MapGet,query:e})},e.prototype.has=function(e){return this.con.pushApi({name:r.MapHas,query:e})},e.prototype.set=function(e,t){return this.con.pushApi({name:r.MapSet,query:{key:e,value:t}})},e.prototype.delete=function(e){return this.con.pushApi({name:r.MapDelete,query:e})},e}(),g=(h=function(e,t){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},h(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}h(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(e){function t(t){var n=e.call(this,t)||this;return n.Map=new m(n),n}return g(t,e),t.prototype.initDb=function(e){var t=this;return this.database=e,this.pushApi({name:r.InitDb,query:e}).then((function(e){var n,o=e.database;return e.isCreated&&(n=e.oldVersion?t.eventBus_.emit(i.Upgrade,o,e.oldVersion,e.newVersion):t.eventBus_.emit(i.Create,o)),(n||f()).then((function(e){return t.eventBus_.emit(i.Open,o)})).then((function(t){return e.isCreated}))}))},t.prototype.dropDb=function(){return this.pushApi({name:r.DropDb})},t.prototype.select=function(e){return this.pushApi({name:r.Select,query:e})},t.prototype.count=function(e){return this.pushApi({name:r.Count,query:e})},t.prototype.insert=function(e){return this.pushApi({name:r.Insert,query:e})},t.prototype.update=function(e){return this.pushApi({name:r.Update,query:e})},t.prototype.remove=function(e){return this.pushApi({name:r.Remove,query:e})},t.prototype.clear=function(e){return this.pushApi({name:r.Clear,query:e})},Object.defineProperty(t.prototype,"logStatus",{set:function(e){this.logger.status=e,this.pushApi({name:r.ChangeLogStatus,query:e})},enumerable:!1,configurable:!0}),t.prototype.openDb=function(e,t){var n=this;return this.pushApi({name:r.OpenDb,query:{version:t,name:e}}).then((function(e){return n.database=e,e}))},t.prototype.getDbList=function(){return console.warn("Api getDbList is recommended to use for debugging only. Do not use in code."),indexedDB.databases()},t.prototype.get=function(e){return console.warn("This API is obsolete, please use Map"),this.Map.get(e)},t.prototype.set=function(e,t){return console.warn("This API is obsolete, please use Map"),this.Map.set(e,t)},t.prototype.terminate=function(){return this.pushApi({name:r.Terminate})},t.prototype.transaction=function(e){return this.pushApi({name:r.Transaction,query:e})},t.prototype.on=function(e,t){this.eventBus_.on(e,t)},t.prototype.off=function(e,t){this.eventBus_.off(e,t)},t.prototype.union=function(e){return this.pushApi({name:r.Union,query:e})},t.prototype.intersect=function(e){return this.pushApi({name:r.Intersect,query:e})},t.prototype.addPlugin=function(e,t){return e.setup(this,t)},t.prototype.addMiddleware=function(e,t){return t?this.pushApi({name:r.Middleware,query:e}):(this.middlewares.push(e),Promise.resolve())},t.prototype.importScripts=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.pushApi({name:r.ImportScripts,query:e})},t}(y),v=function(e){return Promise.all(e)},q=function(e,t){for(var n in e)t(n,e[n])};JsStore=t})();
    /**
     * 加载 JsStore Worker 脚本为 blob URL
     */
    const loadWorkerScript = async (): Promise<string> => {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://cdn.jsdelivr.net/npm/jsstore/dist/jsstore.worker.min.js', true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
          if (this.status === 200) {
            resolve(URL.createObjectURL(this.response));
          } else {
            reject(new Error('Failed to load worker script'));
          }
        };
        xhr.send();
      });
    }
    // 使用 Blob URL 创建 Worker
    const connection = new JsStore.Connection(new Worker(await loadWorkerScript()));
    // 创建/打开数据库
    await connection.initDb({
      name: 'v2ex-replies-pro',
      tables: [{
        name: 'rendered_replies',
        columns: {
          replyId: {primaryKey: true, dataType: 'number'},
          username: {dataType: 'string'},
          created: {dataType: 'number'},
          html: {dataType: 'string'},
          contentRendered: {dataType: 'string'}
        }
      }]
    })
    // 清空数据库
    await connection.clear('rendered_replies');


    // region 渲染回复
    for (let i = 0; i < replies.length; i++) {
      const
        reply = replies[i],
        replyId = reply.id,
        created = reply.created, created1 = Number(created + '000'), createdFormat = moment(created1).format('YYYY-MM-DD HH:mm:ss'), createdAgo = moment(created1).fromNow(),
        member = reply.member,
        username = member.username,
        avatar = member.avatar,

        replyDivId = 'r_' + replyId, $replyDivId = $('#' + replyDivId),
        // 点赞数
        $fade = $replyDivId.find('.fade'), fadeHtml = $fade.length === 0 ? '' : $fade.prop('outerHTML');

      // 删除原回复
      $replyDivId.remove();

      let contentRendered = reply.content_rendered, atSearchStartIndex = 0;
      // 可能会 @ 多个人
      const atSearchStr = '@<a href=\"/member/';
      while (true) {
        let atLinkIndex = contentRendered.indexOf(atSearchStr, atSearchStartIndex);
        if (atLinkIndex === -1) {
          break;
        }
        // 获取 @ 的用户名
        let atUsername = contentRendered.substring(atLinkIndex + atSearchStr.length, contentRendered.indexOf('">', atLinkIndex));
        // 回复内容，其中 @ 链接添加了 class 和 @ 的用户名传递
        const replaceStr = `@<a class="${selector.atLink.substring(1)}" data-reply-div-id="${replyDivId}" data-username="${atUsername}" data-created="${created}" onclick="return false;" href="/member/${atUsername}`;
        contentRendered = contentRendered.replaceAll(`@<a href="/member/${atUsername}`, replaceStr);
        atSearchStartIndex = atLinkIndex + replaceStr.length;
      }

      const html = `
          <!-- 此处的 style 为模仿 .cell 样式 -->
          <div id="${replyDivId}" style="font-size: 14px; line-height: 150%; border-bottom: 1px solid #e2e2e2">
            <div style="display: flex;">
              <div style="display: flex; flex-direction: column; align-items: center; background-color: #fafbfc; padding: 12px 0 10px 0">
                ${username === opUserName ? `
                  <div style="height: 0">
                    <div style="position: relative; left: 44px; top: -12px; background-image: linear-gradient(225deg, #558bf6 23px, #fafbfc 0); width: 32px; height: 32px;">
                      <div class="badges" style="color: white; transform: rotate(45deg); position: relative; top: -1px; right: -5px">OP</div>
                    </div>
                  </div>
                ` : ''}
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

      // 保存已渲染的回复
      const inserted = await connection.insert({
        into: 'rendered_replies', validation: false, skipDataCheck: false, values: [{
          replyId: replyId,
          username,
          created: created,
          html,
          contentRendered: contentRendered
        }]
      })
    }
    // endregion


    // region 展示回复
    const rows = await connection.select({from: 'rendered_replies', order: {by: 'created', type: 'asc'}});
    for (const row of rows) {
      $(selector.repliesBox).append(row.html);
    }

    // 给 @ 链接添加点击事件
    $body.on('click', selector.atLink, async function () {
      const $this = $(this);
      await showTaSay(connection, $this.data('replyDivId'), $this.data('username'), $this.data('created'));
    })
    // endregion


    /**
     * 展示 TA 说了什么
     * @param connection 数据库连接
     * @param replyDivId 回复的 div id
     * @param username 用户名
     * @param created 创建时间
     */
    const showTaSay = async (connection, replyDivId: string, username: string, created: number) => {
      // 关闭弹窗
      if (Reply.winbox) {
        Reply.winbox.close();
      }

      // 高亮点击 @ 链接的那条回复
      const $reply = $('#' + replyDivId);
      $reply.css('border', '2px solid');
      // 跳转到高亮回复
      $('html,body').animate({scrollTop: $reply.offset().top - $(window).height() / 2}, 500);


      let html = '', isGeByPrev = true, isHighlighted = false;
      const rows = await connection.select({from: 'rendered_replies', where: {username}});
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        let borderStyle = 'border-bottom: 1px solid #e2e2e2;';
        // 在点击回复所在位置高亮
        if (!(created > row.created) && isGeByPrev) {
          borderStyle += 'border-top: 2px solid';
          isHighlighted = true;
        } else if (i === rows.length - 1 && !isHighlighted) {
          borderStyle = 'border-bottom: 2px solid';
        }
        html += `
          <div style="${borderStyle}">
            ${$(row.html).find('.ago').parent().prop('outerHTML')}
            <div style="padding-bottom: 5px">${row.contentRendered}</div>
          </div>
        `;
        // 当前条是否为之前的回复，用于下一条判断是否需要高亮
        isGeByPrev = created > row.created;
      }

      Reply.winbox = new WinBox({
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
          localStorage.setItem('ta_say_x', x);
          localStorage.setItem('ta_say_y', y);
        },
        onclose: () => {
          // 关闭弹窗时取消回复高亮
          $reply.css('border', 'none');
          $reply.css('border-bottom', '1px solid #e2e2e2');
          Reply.winbox = null;
        }
      });
    }
  }
}
