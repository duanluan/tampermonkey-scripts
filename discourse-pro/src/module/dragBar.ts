import Store from '@utils/gm/Store'

interface DragBarOptions {
  mainOutletWrapper: string
  sidebarWrapper: string
  sidebar: string
  headerSidebarToggleBtn: string

  sidebarWidthKey: string
  minSidebarWidth: number
  maxSidebarWidth: number
}

export function loadDragBar(options: DragBarOptions) {
  const {
    mainOutletWrapper, sidebarWrapper, sidebar, headerSidebarToggleBtn,
    sidebarWidthKey, minSidebarWidth, maxSidebarWidth
  } = options

  const $mainOutletWrapper = $(mainOutletWrapper)
    , $sidebarWrapper = $(sidebarWrapper)
    , $sidebar = $(sidebar)
    , $headerSidebarToggleBtn = $(headerSidebarToggleBtn)

  // 侧边栏是否存在
  let sidebarExist = $sidebar.length > 0
  if (sidebarExist) {
    // 读取存储的侧边栏宽度
    const storeSidebarWidth = Store.get(sidebarWidthKey)
    if (storeSidebarWidth) {
      $mainOutletWrapper.css('grid-template-columns', `${storeSidebarWidth}px minmax(0, 1fr)`)
    }
  }

  // 在侧边栏内部追加一个拖拽条
  $sidebarWrapper.append(`
    <div class="drag-bar" style="width: 4px; cursor: ew-resize"></div>
  `)

  // 拖拽条
  const $dragBar = $sidebarWrapper.find('.drag-bar')
  // 是否正在拖拽
  let isDragging = false
  // 鼠标按下时的 clientX
  let startClientX = 0
  // 鼠标按下时的侧边栏宽度
  let startSidebarWidth = 0
  // 侧边栏新宽度
  let newSidebarWidth = 0

  // 鼠标按下事件
  $dragBar.on('mousedown', (e) => {
    startClientX = e.clientX
    startSidebarWidth = $sidebarWrapper.width() || 0
    isDragging = true
    // 改变鼠标样式
    document.body.style.cursor = 'ew-resize'
    // 设置拖拽条背景色
    $dragBar.css('background-color', '#e6e6e6')
    // 防止文本被选中
    e.preventDefault()
  })

  // 鼠标移动事件
  $(document).on('mousemove', (e) => {
    if (!isDragging) return

    // 计算新的宽度
    const deltaX = e.clientX - startClientX
    newSidebarWidth = Math.min(maxSidebarWidth, Math.max(minSidebarWidth, startSidebarWidth + deltaX))
    $mainOutletWrapper.css('grid-template-columns', `${newSidebarWidth}px minmax(0, 1fr)`)
  })

  // 鼠标松开事件
  $(document).on('mouseup', () => {
    if (!isDragging) return

    isDragging = false
    // 恢复鼠标样式
    document.body.style.cursor = 'default'
    // 恢复拖拽条背景色
    $dragBar.css('background-color', 'transparent')
    // 记忆侧边栏宽度
    Store.set(sidebarWidthKey, newSidebarWidth)
  })

  // 展开收起侧边栏按钮点击事件
  $headerSidebarToggleBtn.on('click', () => {
    sidebarExist = !sidebarExist

    $mainOutletWrapper.css(
      'grid-template-columns', `${sidebarExist ? Store.get(sidebarWidthKey) + 'px' : '0'} minmax(0, 1fr)`
    )
  })
}