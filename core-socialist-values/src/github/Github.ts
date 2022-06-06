export default class Github {

  static selectors = {
    notice: '.border.js-notice'
  }

  static replace() {
    if (location.href === 'https://github.com/') {
      const $notice = $(Github.selectors.notice);
      if ($notice.length > 0 && $notice.text().toLowerCase().indexOf('ukraine') != -1) {
        $notice.remove();
      }
    }
  }
}
