import Store from "@utils/gm/Store";
import MenuCmd from "@utils/gm/MenuCmd";
import CommonOptions from "@utils/CommonOptions";

export default class Options {

  private static SCRIPT_ID = 440854;

  /**
   * 选项 Key
   */
  static Keys = {
    removeBar: 'removeBar',
    jinrishici: 'jinrishici',
  }

  /**
   * 选项
   * @private
   */
  protected static options = [
    {label: '隐藏条幅', name: this.Keys.removeBar, version: 1, value: false, menuCmdId: null},
    {label: '今日诗词', name: this.Keys.jinrishici, version: 1, value: false, menuCmdId: null, token: ''}
  ];

  /**
   * 注册 bool 类型的选项
   * @param option 选项
   */
  static registerBoolOption(option: any) {
    CommonOptions.registerBoolOption(option);
  }

  /**
   * 注册所有选项
   */
  static registerAll() {
    CommonOptions.registerAll(this.options, 'https://greasyfork.org/scripts/' + this.SCRIPT_ID);
  }

  /**
   * 在页面中加载选项
   */
  static loadInGreasyfork() {
    CommonOptions.loadInGreasyfork(this.SCRIPT_ID, ($scriptContent) => {
      // 添加脚本设置的内容
      let scriptContent = '';
      for (const option of this.options) {
        const storeOption = JSON.parse(Store.get(option.name)), optionName = storeOption.name, optionVal = storeOption.value;

        scriptContent += `<h3>${option.label}</h3>`;
        switch (optionName) {
          case this.Keys.removeBar:
            scriptContent += `<label><input type="checkbox" id="script-options-${optionName}" ${optionVal ? 'checked' : ''}> 是否隐藏条幅（勾选后将隐藏条幅而不是替换其内容）</label>`;
            break;
          case this.Keys.jinrishici:
            scriptContent += `<label><input type="checkbox" id="script-options-${optionName}-enabled" ${optionVal ? 'checked' : ''}> 启用<a href="https://www.jinrishici.com" target = "_blank">今日诗词</a>（仍需取消勾选“是否隐藏条幅”才能生效）</label>`;
            break;
        }
      }
      $scriptContent.html(scriptContent);

      const $body = $(document.body);
      // region 添加脚本设置的事件
      // 是否隐藏条幅
      let optionSelector = '#script-options-' + this.Keys.removeBar;
      $body.on('change', optionSelector, () => {
        const removeBarOption = JSON.parse(Store.get(this.Keys.removeBar));
        removeBarOption.value = !removeBarOption.value;
        // 重新注册菜单
        MenuCmd.unregister(removeBarOption.menuCmdId);
        this.registerBoolOption(removeBarOption);
      });

      // 启用今日诗词
      optionSelector = '#script-options-' + this.Keys.jinrishici + '-enabled';
      $body.on('change', optionSelector, () => {
        const jinrishiciOption = JSON.parse(Store.get(this.Keys.jinrishici));
        jinrishiciOption.value = !jinrishiciOption.value;
        // 重新注册菜单
        MenuCmd.unregister(jinrishiciOption.menuCmdId);
        this.registerBoolOption(jinrishiciOption);
      });
      // endregion
    })
  }
}
