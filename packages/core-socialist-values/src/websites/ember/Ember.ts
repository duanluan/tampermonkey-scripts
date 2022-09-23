import Bar from '../../common/Bar';
import $ from 'jquery';

export default class Ember {
  static selectors = {
    bar: '.callout-banner',
  };

  static replace() {
    if (location.host === 'emberjs.com') {
      Bar.replace({
        barSelector: this.selectors.bar,
        isObserveBar: false,
        hideBarSelector: this.selectors.bar,
        isObserveHideBar: false,
        jinrishiciCallback: () => {
          $(this.selectors.bar).css('color', '#fff');
        },
      });
      $(this.selectors.bar).css({ backgroundColor: '#1c1e24', padding: 0 });
    }
  }
}
