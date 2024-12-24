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
    headerWrap, mainOutletWrapper, mainOutlet
  } = options
  const $headerWrap = $(headerWrap)
    , $mainOutletWrapper = $(mainOutletWrapper)
    , $mainOutlet = $(mainOutlet)

  // 顶部撑满
  $headerWrap.css('max-width', '100%')
  // 侧边栏和主内容撑满
  $mainOutletWrapper.css('max-width', '100%')
  // 主内容撑满
  $mainOutlet.css('width', '100%')
  loadWidescreenModeByTopic(options)
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
