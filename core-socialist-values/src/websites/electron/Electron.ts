import Bar from "../../common/Bar";

export default class Electron {

  static selectors = {
    bar: '.announcement-banner',
  }

  static replace() {
    if (location.host === 'www.electronjs.org') {
      Bar.replace({
        barSelector: this.selectors.bar, isObserveBar: false, hideBarSelector: this.selectors.bar, isObserveHideBar: false, replaceCallback: () => {
          $(Bar.replaceSelector.barUl + ':eq(0)').css('height', '25px');
          $(Bar.replaceSelector.barUl + ':eq(1)').css('height', '20px');
        }
      });
      $(this.selectors.bar).css({'padding': 0});
    }
  }
}
