import Store from './gm/Store';
import MenuCmd from './gm/MenuCmd';

/**
 * 选项菜单
 */
export default class CommonOptions {
  // /**
  //  * 选项 Key
  //  */
  // protected static Keys = {
  //   // xxx: 'xxx'
  // }
  //
  // /**
  //  * 选项
  //  * @private
  //  */
  // protected static options = [
  //   // {label: '', name: this.Keys.xxx, version: 1, value: false, menuCmdId: null},
  // ];

  /**
   * 注册 bool 类型的选项
   * @param option 选项
   */
  static registerBoolOption(option: any) {
    const val = option.value,
      valIsBool = typeof val === 'boolean';

    if (!valIsBool) {
      return;
    }
    // 注册选项
    const currentMenuCmdId = MenuCmd.register(
      (val ? '☑️ ' : '🔲 ') + option.label,
      () => {
        // 点击值取反
        option.value = !option.value;
        Store.set(option.name, JSON.stringify(option));

        // 取消注册
        MenuCmd.unregister(currentMenuCmdId);
        // 重新注册
        this.registerBoolOption(option);
        // 刷新页面
        window.location.reload();
      }
    );

    // 保存选项 ID
    option.menuCmdId = currentMenuCmdId;
    Store.set(option.name, JSON.stringify(option));
  }

  /**
   * 注册所有选项
   * @param url 设置页面 URL
   * @param options
   */
  static registerAll(url: string, options: any[]) {
    MenuCmd.register('更多设置', () => {
      window.open(url, '_blank');
    });

    for (const option of options) {
      // TODO 【调试】不保留选项的值，每次都从 Store 中获取
      // Store.set(option.name, null);

      let storeOption = Store.get(option.name)
        ? JSON.parse(Store.get(option.name))
        : null;
      // 如果选项不存在 || 版本不一致 时重置选项
      if (
        storeOption === null ||
        !storeOption['version'] ||
        storeOption['version'] < option.version
      ) {
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
    if (
      location.host !== 'greasyfork.org' ||
      location.href.indexOf('/scripts/' + scriptId) == -1
    ) {
      return;
    }
    const selector = {
      scriptLinks: '#script-links',
      scriptOptions: '#script-options',
      scriptContent: '#script-content',
    };
    const $body = $(document.body),
      $scriptLinks = $(selector.scriptLinks),
      $scriptContent = $(selector.scriptContent);

    // 添加脚本设置的选项卡
    $scriptLinks
      .children('li:eq(0)')
      .after(
        `<li><a href="javascript:;" id="script-options">脚本设置</a></li>`
      );
    // 脚本设置选项点击事件
    $body.on('click', selector.scriptOptions, () => {
      // 移除已选中选项的样式
      const $currentLi = $scriptLinks.children('li.current');
      $currentLi.html(`<a href="${location.href}">${$currentLi.text()}</a>`);
      $currentLi.removeClass('current');

      // 添加选中选项的样式
      const $scriptOptions = $(selector.scriptOptions);
      $scriptOptions.parent().addClass('current');

      loadOptionContentFn($scriptContent);
    });
  }
}
