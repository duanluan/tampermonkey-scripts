import Bar from "../../common/Bar";

export default class React {

  private static selectors = {
    bar: '.css-lpiycv',
    hideBar: '.css-1loxuh3',
    followUpObserveElement: '#gatsby-focus-wrapper',
    excludeHeader: '.css-xbsqlp'
  }

  static replace() {
    if (location.host === 'react.dev') {
      Bar.replace({
        barSelector: this.selectors.bar, isObserveBar: true, hideBarSelector: this.selectors.hideBar, isObserveHideBar: false, followUpObserveSelector: this.selectors.followUpObserveElement, hideBarCallback: () => {
          $(this.selectors.excludeHeader).css('margin-top', '60px');
        }
      });
    }
  }
}
