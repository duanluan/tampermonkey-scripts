import Store from "../../utils/src/gm/Store";
import MenuCmd from "../../utils/src/gm/MenuCmd";

/**
 * 选项菜单
 */
export default class BaseOptions {
  /**
   * 脚本 ID
   */
  scriptId: number;

  constructor(scriptId) {
    this.scriptId = scriptId;
  }

  /**
   * 选项 Key
   */
  protected static Keys = {
    // demo
    // xxx: 'xxx'
  }

  /**
   * 选项
   * @private
   */
  protected static options = [
    // demo
    // {label: '', name: this.Keys.xxx, version: 1, value: false, menuCmdId: null},
  ];

  /**
   * 注册 bool 类型的选项
   * @param option 选项
   */
  static registerBoolOption(option: any) {
    const val = option.value, valIsBool = (typeof val === 'boolean');

    if (!valIsBool) {
      return;
    }
    // 注册选项
    const currentMenuCmdId = MenuCmd.register((val ? '☑️ ' : '🔲 ') + option.label, () => {
      // 点击值取反
      option.value = !option.value;
      Store.set(option.name, JSON.stringify(option));

      // 取消注册
      MenuCmd.unregister(currentMenuCmdId);
      // 重新注册
      this.registerBoolOption(option);
      // 刷新页面
      window.location.reload();
    });

    // 保存选项 ID
    option.menuCmdId = currentMenuCmdId;
    Store.set(option.name, JSON.stringify(option));
  }

  /**
   * 注册所有选项
   */
  static registerAll(scriptId: number) {
    MenuCmd.register('更多设置', () => {
      window.open('https://greasyfork.org/scripts/' + scriptId, '_blank');
    });

    for (const option of this.options) {
      // TODO 【调试】不保留选项的值，每次都从 Store 中获取
      // Store.set(option.name, null);

      let storeOption = JSON.parse(Store.get(option.name));
      // 如果选项不存在 || 版本不一致 时重置选项
      if (storeOption === null || !storeOption['version'] || storeOption['version'] < option.version) {
        Store.set(option.name, JSON.stringify(option));
        storeOption = option;
      }
      this.registerBoolOption(storeOption);
    }
  }

  /**
   * 在页面中加载选项
   */
  static loadInGreasyfork(scriptId: number, loadOptionContentFn: Function) {
    if (location.host !== 'greasyfork.org' || location.href.indexOf('/scripts/' + scriptId) == -1) {
      return;
    }
    const selector = {
      scriptLinks: '#script-links',
      scriptOptions: '#script-options',
      scriptContent: '#script-content',
    }
    const $body = $('body'), $scriptLinks = $(selector.scriptLinks), $scriptContent = $(selector.scriptContent);

    // 添加脚本设置的选项卡
    $scriptLinks.children('li:eq(0)').after(`<li><a href="javascript:;" id="script-options">脚本设置</a></li>`)
    $body.on('click', selector.scriptOptions, () => {
      const $scriptOptions = $(selector.scriptOptions);
      // 点击脚本设置的菜单样式
      const $currentLi = $scriptLinks.children('li.current');
      $currentLi.html(`<a href="${location.href}">${$currentLi.text()}</a>`);
      $currentLi.removeClass('current');
      $scriptOptions.parent().addClass('current');

      loadOptionContentFn($scriptContent);
    });
  }
}
