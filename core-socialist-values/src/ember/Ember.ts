import Bar from "../common/Bar";

export default class Ember {

  static selectors = {
    bar: '.callout-banner',
  }

  static replace() {
    if (location.host === 'emberjs.com') {
      Bar.replace(this.selectors.bar, null);
      $(this.selectors.bar).css({'backgroundColor': '#1c1e24', 'padding': 0});
    }
  }
}
