export default class Pandoc {

  static selectors = {
    headerBtn: '#ukraine'
  }

  static replace() {
    if (location.host === 'pandoc.org') {
      return
    }
    const $headerBtn = $(this.selectors.headerBtn)
    if ($headerBtn.length > 0) {
      $headerBtn.remove()
    }
  }
}
