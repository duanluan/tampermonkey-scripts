import Bar from "../common/Bar";

export default class Namecheap {

  static selectors = {
    footerBanner: '.gb-stand-with-ukraine-banner'
  }

  static replace() {
    console.log(location.host)
    if (location.host !== 'www.namecheap.com') {
      return
    }
    Bar.replace({
      barSelector: this.selectors.footerBanner, isObserveBar: false, replaceBarCallback: () => {
        $(this.selectors.footerBanner).css({
          padding: '15px 0',
          textAlign: 'center',
          fontWeight: 'bold',
        })
      }
    });
  }
}
