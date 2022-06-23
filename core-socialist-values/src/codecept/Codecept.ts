import Bar from "../common/Bar";

export default class Codecept {

  static selectors = {
    bar: '.sub-bar .message',
    observingBar: '#app'
  }

  static replace() {
    if (location.host === 'codecept.io') {
      Bar.replace(this.selectors.bar, null);
    }
  }
}
