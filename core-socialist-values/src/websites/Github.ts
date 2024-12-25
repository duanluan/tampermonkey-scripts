export default class Github {

  static selectors = {
    notice: '.border.js-notice'
  }

  static replace() {
    if (location.href === 'https://github.com/') {
      return
    }
    const $notice = $(this.selectors.notice)
    if ($notice.length > 0 && $notice.text().toLowerCase().indexOf('ukraine') != -1) {
      $notice.remove()
    }
  }
}
