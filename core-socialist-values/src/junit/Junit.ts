export default class Junit {

  private static selectors = {
    reactBar: '.css-lpiycv',
    junitAbout: '#about',
    junitLogo: 'img[src="/junit5/assets/img/junit5-logo.png"]',
    junitFavicon: 'link[rel="icon"]',
    codeceptBar: '.sub-bar .message',
  }

  private static junitLogoUrl = 'https://raw.githubusercontent.com/duanluan/tampermonkey-scripts/main/core-socialist-values/src/junit/imgs/junit5-logo.png'

  static replace() {
    if (location.href === 'https://junit.org/junit5/') {
      $(this.selectors.junitAbout).prevAll().remove();
      $(this.selectors.junitLogo).attr('src', this.junitLogoUrl);
      $(this.selectors.junitFavicon).attr('href', this.junitLogoUrl);
    }
  }
}
