export default class SvelteMaterialUi {

  static selectors = {
    bar: '.ukraine',
  }

  static replace() {
    if (location.host === 'sveltematerialui.com') {
      $(this.selectors.bar).attr('class', '');
    }
  }
}
