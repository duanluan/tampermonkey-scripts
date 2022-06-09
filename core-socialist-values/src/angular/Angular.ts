export default class Angular {

  private static selectors = {
    bar: '.mat-toolbar-row.notification-container',
    dismissNotificationBtn: 'button[aria-label="Dismiss notification"]',
  }

  static replace() {
    if (location.host === 'angular.io') {
      // 不存在是否关闭通知的本地存储时
      if (!localStorage.getItem('aio-notification/war-ukraine')) {
        // 如果通知中存在关键词
        const $bar = $(this.selectors.bar);
        if ($bar.length > 0 && $bar.text().toLowerCase().indexOf('ukraine') != -1) {
          // 点击关闭通知
          $(this.selectors.dismissNotificationBtn)[0].click();
        }
      }
    }
  }
}