interface WideScreenModeOptions {
  headerWrap: string
  mainOutletWrapper: string
  mainOutlet: string

  postStream: string
  topicAvatar: string
  topicBody: string
  topicMap: string
  loadingContainer: string
  topicTimerInfo: string
  topicFooterBtns: string
  moreTopicsContainer: string
}

/**
 * 添加 history 的 pushState 和 replaceState 事件
 *
 * 参考：https://segmentfault.com/a/1190000017560688#item-4
 */
function addPushReplaceStateEvent() {
  var _wr = function (type) {
    var orig = history[type]
    return function () {
      var rv = orig.apply(this, arguments)
      var e = new Event(type)
      // @ts-ignore
      e.arguments = arguments
      window.dispatchEvent(e)
      return rv
    }
  }
  history.pushState = _wr('pushState')
  history.replaceState = _wr('replaceState')
}

/**
 * 加载宽屏模式
 * @param options
 */
function loadWidescreenMode(options: WideScreenModeOptions) {
  addPushReplaceStateEvent()

  const {
    headerWrap, mainOutletWrapper, mainOutlet,
    postStream,
  } = options
  const $headerWrap = $(headerWrap)
    , $mainOutletWrapper = $(mainOutletWrapper)
    , $mainOutlet = $(mainOutlet)
    , $postStream = $(postStream)

  // 顶部撑满
  $headerWrap.css('max-width', '100%')
  // 侧边栏和主内容撑满
  $mainOutletWrapper.css('max-width', '100%')
  // 主内容撑满
  $mainOutlet.css('width', '100%')

  // console.debug('话题页首次加载宽屏模式 + 监听话题列表变化')
  // 话题页首次加载宽屏模式 + 监听话题列表变化
  loadWidescreenModeByTopicAndObserver(options, $postStream)

  // 历史记录变化时话题页重新加载宽屏模式
  window.addEventListener('popstate', () => {
    // console.debug('历史记录变化时话题页重新加载宽屏模式')
    popstateAndPushStateListener(postStream, options, $mainOutlet)
  })
  // 单页面 pushState 切换页面时话题页重新加载宽屏模式
  window.addEventListener('pushState', () => {
    // console.debug('单页面 pushState 切换页面时话题页重新加载宽屏模式')
    popstateAndPushStateListener(postStream, options, $mainOutlet)
  })
  window.addEventListener('replaceState', () => {
    // console.debug('单页面 replaceState 切换页面时话题页重新加载宽屏模式')
    popstateAndPushStateListener(postStream, options, $mainOutlet)
  })
}

/**
 * popstate 和 pushState 事件监听
 * @param postStreamSelector 话题内容选择器
 * @param options 选项
 * @param $mainOutlet 主内容
 */
function popstateAndPushStateListener(postStreamSelector: string, options: WideScreenModeOptions, $mainOutlet: JQuery<HTMLElement>) {
  if (location.href.indexOf('/topic/') !== -1) {
    // 等待 .post-stream 加载完成
    const interval = setInterval(() => {
      const $newPostStreamWrapper = $(postStreamSelector)
      if ($newPostStreamWrapper.length > 0) {
        clearInterval(interval)
        loadWidescreenModeByTopicAndObserver(options, $(postStreamSelector))
      }
    }, 500)
  }
}

/**
 * 话题页加载宽屏模式 + 监听话题内容变化
 * @param options 选项
 * @param $postStream 话题内容
 */
function loadWidescreenModeByTopicAndObserver(options, $postStream: JQuery<HTMLElement>) {
  // 监听话题列表变化
  if (location.href.indexOf('/topic/') == -1) {
    return;
  }
  loadWidescreenModeByTopic(options)

  if ($postStream.data('hasObserver')) {
    // console.debug('[discourse-pro-widescreenMode] 已存在话题内容变化监听器，跳过');
    return;
  }

  // 防抖函数
  let debounceTimeout;
  const debounce = (func, delay) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(func, delay);
  };

  const observer = new MutationObserver((mutationsList) => {
    debounce(() => {
      loadWidescreenModeByTopic(options);
    }, 1000);
  })

  // 是否已监听
  $postStream.data('hasObserver', true);
  // 此处监听 .posts-wrapper 下的所有节点而不是 .post-stream 下的子节点，因为 .post-stream 会在时间轴跳动后重新加载
  observer.observe($postStream[0], {
    // 监听子节点
    childList: true,
    // 不监听子节点下的节点
    subtree: false,
  });

}

/**
 * 话题页加载宽屏模式
 * @param options
 */
function loadWidescreenModeByTopic(options: any) {
  const {
    postStream, topicAvatar, topicBody, topicMap, loadingContainer, topicTimerInfo, topicFooterBtns, moreTopicsContainer
  } = options
  const $postStream = $(postStream)
    , $topicAvatar = $(topicAvatar)
    , $topicBody = $(topicBody)
    , $topicMap = $(topicMap)
    , $loadingContainer = $(loadingContainer)
    , $topicTimerInfo = $(topicTimerInfo)
    , $topicFooterBtns = $(topicFooterBtns)
    , $moreTopicsContainer = $(moreTopicsContainer)

  const postStreamWidth = $postStream.width()
  const topicAvatarWidth = $topicAvatar.width()
  const topicWidth = (postStreamWidth - 45)
  const topicBodyWidth = (topicWidth - topicAvatarWidth) + 'px'

  // 如果第一个的宽度和最后一个的宽度不一样，说明话题列表变化了
  const firstTopicBodyWidth = $($topicBody[0]).css('width')
  const lastTopicBodyWidth = $($topicBody[$topicBody.length - 1]).css('width');
  if (firstTopicBodyWidth == lastTopicBodyWidth && firstTopicBodyWidth == topicBodyWidth) {
    // console.debug('[discourse-pro-widescreenMode] 话题页加载宽屏模式已加载过，跳过');
    return
  }

  // 话题内容撑满
  $topicBody.css('width', topicBodyWidth)
  // 话题主内容后浏览量、链接、回复人等信息撑满
  $topicMap.css('max-width', topicWidth + 'px')
  // 最后一个回复后的底边框撑满
  $loadingContainer.css('width', topicWidth + 'px')
  $topicTimerInfo.css('max-width', topicWidth + 'px')
  // 话题底部按钮撑满
  $topicFooterBtns.css('max-width', topicWidth + 'px')
  // 更多话题列表撑满
  $moreTopicsContainer.css('max-width', topicWidth + 'px')
}

export {loadWidescreenMode, loadWidescreenModeByTopic}
