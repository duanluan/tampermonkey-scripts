import Bar from "../common/Bar";

export default class Codecept {

  static selectors = {
    bar: '.top-bar',
    observingBar: '.ng-star-inserted'
  }

  static replace() {
    if (location.host === 'docs.nestjs.com') {
      Bar.replace(this.selectors.bar, null);
      $(this.selectors.bar).css('padding', '0');
    }
  }
}
