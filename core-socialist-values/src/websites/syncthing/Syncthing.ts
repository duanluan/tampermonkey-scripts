import Bar from "../../common/Bar";

export default class Syncthing {

  static selectors = {
    bar: '.alert',
  }

  static replace() {
    if (location.host === 'syncthing.net') {
      Bar.replace({
        barSelector: this.selectors.bar, isObserveBar: false, hideBarSelector: this.selectors.bar, isObserveHideBar: false, replaceCallback: () => {
          $(this.selectors.bar).css('textAlign', 'center');
        }
      });
    }
  }
}
