export default class SvelteMaterialUi {

  static selectors = {
    removeEl1: 'td.lightbg[style="background-color: #0057b7"]',
    removeEl2: 'td.lightbg[style="background-color: #ffd700"]',
    backgroundColorEl: 'td.lightbg[align="left"]',
    barRootEl: 'body > table:nth-child(1)'
  }

  static replace() {
    if (location.host !== 'www.vim.org') {
      return
    }
    for (let i = 0; i < 5; i++) {
      // 删除蓝
      let lightbg = $(this.selectors.removeEl1)
      if (!lightbg) break
      lightbg.remove()

      // 删除黄
      lightbg = $(this.selectors.removeEl2)
      if (!lightbg) break
      lightbg.remove()
    }

    // 空白填充背景色
    $(this.selectors.barRootEl).css('background-color', $(this.selectors.backgroundColorEl).css('background-color'))
  }
}
