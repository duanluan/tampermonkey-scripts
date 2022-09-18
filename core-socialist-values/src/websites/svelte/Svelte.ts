import Bar from "../../common/Bar";

export default class Svelte {

  private static selectors = {
    navSpot: '.nav-spot',
    bar: '.ukr',
    barHeight: ':root',
    barHeightAttrName: '--ukr-footer-height',
    observing: '#main',
  }

  private static svelteLogoStyle = 'background-image: url(https://svelte.dev/svelte-logo-horizontal.svg)';

  static replace() {
    if (location.host === 'svelte.dev') {
      const $navSpot = $(this.selectors.navSpot);
      let i = 0;
      // 监听条幅变化，变化后再次执行
      const observer = new MutationObserver(() => {
        if ($navSpot.length > 0) {
          // 替换 Logo
          $navSpot.attr('style', this.svelteLogoStyle);
          // 替换两次后结束监听
          if (i >= 1) {
            observer.disconnect();
          }
          i++;
        }
      });
      observer.observe($(this.selectors.observing)[0], {childList: true});

      // 底部横幅
      Bar.replace({
        barSelector: this.selectors.bar, isObserveBar: true, hideBarSelector: this.selectors.bar, isObserveHideBar: true, replaceBarCallback: () => {
          $(this.selectors.bar).css({'backgroundColor': '#1c1e24', 'paddingTop': '20px'});
        }
      });
    }
  }
}
