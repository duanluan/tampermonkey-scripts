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
 * 加载宽屏模式
 * @param options
 */
function loadWidescreenMode(options: WideScreenModeOptions) {
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
  loadWidescreenModeByTopic(options)
  // 监听话题内容变化
  if (location.href.indexOf('/topic/') !== -1 && $postStream.length > 0) {
    // 防抖定时器
    let debounceTimer: number | null = null

    const observer = new MutationObserver((mutationsList) => {
      // 每次有新节点触发时，清除之前的定时器并重新计时
      if (debounceTimer) {
        clearTimeout(debounceTimer)
      }
      debounceTimer = window.setTimeout(() => {
        let addedNodes: HTMLElement[] = []
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node instanceof HTMLElement && $(node).is('.topic-post')) {
                addedNodes.push(node) // 收集所有新增的 .topic-post 节点
              }
            })
          }
        }
        if (addedNodes.length > 0) {
          // console.log('新增的 .topic-post 节点:', addedNodes);
          loadWidescreenModeByTopic(options)
        }
        // 删除定时器
        debounceTimer = null
      }, 1000)
    })
    observer.observe($postStream[0], {
      childList: true, // 监听直接子节点的变化
      subtree: false, // 不需要监听后代
    });
  }
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

  if (location.href.indexOf('/topic/') != -1) {
    const postStreamWidth = $postStream.width()
    const topicAvatarWidth = $topicAvatar.width()
    const topicWidth = (postStreamWidth - 45)
    // 话题内容撑满
    $topicBody.css('width', (topicWidth - topicAvatarWidth) + 'px')
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
}

export {loadWidescreenMode, loadWidescreenModeByTopic}
