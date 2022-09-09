import Bar from "../../common/Bar";

export default class Codecept {

  static selectors = {
    bar: '.top-bar',
  }

  static replace() {
    if (location.host === 'docs.nestjs.com') {
      Bar.replace({
        barSelector: this.selectors.bar, isObserveBar: false, hideBarSelector: this.selectors.bar, isObserveHideBar: false, csvCallback: () => {
          $(this.selectors.bar).css('padding', '0');
        }, jinrishiciCallback: () => {
          $(this.selectors.bar).css('color', '#fff');
        }
      });
    }
  }
}
