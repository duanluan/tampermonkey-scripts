import Bar from "../common/Bar";

export default class React {

  private static selectors = {
    bar: '.css-lpiycv',
    observingBar: '#gatsby-focus-wrapper',
  }

  static replace() {
    if (location.host === 'reactjs.org') {
      Bar.replace(this.selectors.bar, this.selectors.observingBar);
    }
  }
}
