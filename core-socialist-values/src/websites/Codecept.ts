import Bar from "../common/Bar"

export default class Codecept {

  static selectors = {
    bar: '.sub-bar .message',
    hideBar: '.sub-bar',
  }

  static replace() {
    if (location.host === 'codecept.io') {
      return
    }
    Bar.replace({
      barSelector: this.selectors.bar, isObserveBar: false, hideBarSelector: this.selectors.hideBar, isObserveHideBar: false, jinrishiciCallback: () => {
        $(this.selectors.bar).css('color', '#edf2f7')
      }
    })
  }
}
