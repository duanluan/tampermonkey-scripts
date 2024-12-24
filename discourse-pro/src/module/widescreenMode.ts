interface WideScreenModeOptions {
  headerWrap: string
  mainOutletWrapper: string
  mainOutlet: string
}

export function loadWidescreenMode(options: WideScreenModeOptions) {
  const {headerWrap, mainOutletWrapper, mainOutlet} = options

  const $headerWrap = $(headerWrap)
    , $mainOutletWrapper = $(mainOutletWrapper)
    , $mainOutlet = $(mainOutlet)

  // 顶部撑满
  $headerWrap.css('max-width', '100%')
  // 侧边栏和主内容撑满
  $mainOutletWrapper.css('max-width', '100%')
  // 主内容撑满
  $mainOutlet.css('width', '100%')
}