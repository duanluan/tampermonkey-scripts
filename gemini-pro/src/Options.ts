import CommonOptions from "@utils/CommonOptions";

export default class Options {

  /**
   * 选项 Key
   */
  static Keys = {
    settings: 'settings',
  }

  /**
   * 选项
   * @private
   */
  protected static options = [
    {label: '设置', name: this.Keys.settings, version: 1, value: '', menuCmdId: null},
  ];

  /**
   * 注册所有选项
   * @param settingsCallback 点击“设置”时的回调函数
   */
  static registerAll(settingsCallback?: () => void) {
    // 如果传入了回调，将其绑定到对应的选项上
    if (settingsCallback) {
      const option = this.options.find(o => o.name === this.Keys.settings);
      if (option) {
        (option as any).callback = settingsCallback;
      }
    }
    CommonOptions.registerAll(this.options, null, false);
  }
}