import Store from "@utils/gm/Store";
import MenuCmd from "@utils/gm/MenuCmd";
import CommonOptions from "@utils/CommonOptions";

export default class Options {

  private static SCRIPT_ID = 520817;

  /**
   * 选项 Key
   */
  static Keys = {
    dragBar: 'dragBar',
    widescreenMode: 'widescreenMode',
  }

  /**
   * 选项
   * @private
   */
  protected static options = [
    {label: '侧边栏拖拽条', name: this.Keys.dragBar, version: 1, value: false, menuCmdId: null},
    {label: '宽屏模式', name: this.Keys.widescreenMode, version: 1, value: false, menuCmdId: null, token: ''}
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

  static onChangByBoolOption( key) {
    let optionSelector = '#script-options-' + key;
    $(document.body).on('change', optionSelector, () => {
      const option = JSON.parse(Store.get(key));
      option.value = !option.value;
      // 重新注册选项
      MenuCmd.unregister(option.menuCmdId);
      this.registerBoolOption(option);
    });
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
          case this.Keys.dragBar:
            scriptContent += `<label><input type="checkbox" id="script-options-${optionName}" ${optionVal ? 'checked' : ''}> 侧边栏拖拽条（侧边栏和主内容间添加拖拽条，用于调整两者宽度）</label>`;
            break;
          case this.Keys.widescreenMode:
            scriptContent += `<label><input type="checkbox" id="script-options-${optionName}" ${optionVal ? 'checked' : ''}> 宽屏模式</label>`;
            break;
        }
      }
      $scriptContent.html(scriptContent);

      // 侧边栏拖拽条
      this.onChangByBoolOption(this.Keys.dragBar);
      // 宽屏模式
      this.onChangByBoolOption(this.Keys.widescreenMode);
    })
  }
}
