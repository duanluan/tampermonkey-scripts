import Bar from "../common/Bar";

export default class Reactjs {

  private static selectors = {
    bar: '.css-lpiycv',
    observingBar: '#gatsby-focus-wrapper',
  }

  static replace() {
    if (location.host === 'reactjs.org') {
      Bar.replace(Reactjs.selectors.bar, Reactjs.selectors.observingBar);
    }
  }
}