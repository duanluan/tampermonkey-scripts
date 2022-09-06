export default class Svelte {

  private static selectors = {
    navSpot: '.nav-spot',
    footer: '.ukr',
    footerHeight: ':root',
    footerHeightAttrName: '--ukr-footer-height',
  }

  private static svelteLogoStyle = 'background-image: url(https://svelte.dev/svelte-logo-horizontal.svg)';

  static replace() {
    if (location.href.indexOf('https://svelte.dev/') === 0) {
      const $navSpot = $(this.selectors.navSpot);
      let i = 0;
      // 监听条幅变化，变化后再次执行
      const observer = new MutationObserver(() => {
        if ($navSpot.length > 0) {
          // 替换 Logo
          $navSpot.attr('style', this.svelteLogoStyle);
          // 去除底部横幅
          $(this.selectors.footer).remove();
          $(this.selectors.footerHeight).css(this.selectors.footerHeightAttrName, 0);
          // 替换两次后结束监听
          if (i >= 1) {
            observer.disconnect();
          }
          i++;
        }
      });
      observer.observe($('#main')[0], {childList: true});
    }
  }
}
