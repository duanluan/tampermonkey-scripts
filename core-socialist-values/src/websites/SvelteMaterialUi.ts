export default class SvelteMaterialUi {

  static selectors = {
    bar: '.ukraine',
  }

  static replace() {
    if (location.host !== 'sveltematerialui.com') {
      return
    }
    $(this.selectors.bar).attr('class', '')
  }
}
