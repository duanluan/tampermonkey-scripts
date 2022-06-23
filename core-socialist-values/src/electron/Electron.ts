import Bar from "../common/Bar";

export default class Electron {

  static selectors = {
    bar: '.announcement-banner',
  }

  static replace() {
    if (location.host === 'www.electronjs.org') {
      Bar.replace(this.selectors.bar, null);
      $(this.selectors.bar).css({'padding': 0});
    }
  }
}
