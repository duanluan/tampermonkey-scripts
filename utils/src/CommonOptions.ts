import Store from "@utils/gm/Store";
import MenuCmd from "@utils/gm/MenuCmd";

/**
 * 选项菜单
 */
export default class CommonOptions {

  /**
   * 注册 bool 类型的选项
   *
   * @param option 选项
   */
  static registerBoolOption(option: any) {
    const val = option.value, valIsBool = (typeof val === 'boolean');

    if (!valIsBool) {
      return;
    }
    // 注册选项和选项点击事件
    const currentMenuCmdId = MenuCmd.register((val ? '✅ ' : '🔲 ') + option.label, () => {
      // 点击后取反
      option.value = !option.value;
      Store.set(option.name, JSON.stringify(option));

      // 重新注册
      MenuCmd.unregister(currentMenuCmdId);
      this.registerBoolOption(option);
      // 刷新页面
      window.location.reload();
    });

    // 保存选项 ID
    option.menuCmdId = currentMenuCmdId;
    Store.set(option.name, JSON.stringify(option));
  }

  /**
   * 注册字符串/按钮类型的选项 (无状态)
   *
   * @param option 选项
   */
  static registerStrOption(option: any) {
    MenuCmd.register(option.label, () => {
      if (typeof option.callback === 'function') {
        option.callback();
      }
    });
  }

  /**
   * 注册所有选项
   *
   * @param options 选项
   * @param moreOptionsUrl 更多设置页面 URL
   * @param useStore 是否使用存储（默认 true）
   */
  static registerAll(options: any[], moreOptionsUrl?: string, useStore: boolean = true) {
    if (moreOptionsUrl) {
      // 注册“更多设置”选项，点击后打开新页面到更多设置页面
      MenuCmd.register('更多设置', () => {
        window.open(moreOptionsUrl, '_blank');
      });
    }

    for (const option of options) {
      // TODO 【调试】不保留选项的值，每次都从 Store 中获取
      // Store.set(option.name, null);

      // 声明最终用于注册的选项变量
      let finalOption = option;

      // useStore 为 true 时，才从 Store 读取或更新
      if (useStore) {
        let storeOption = Store.get(option.name) ? JSON.parse(Store.get(option.name)) : null;
        // 如果选项不存在 || 版本不一致 时重置选项
        if (storeOption === null || !storeOption['version'] || storeOption['version'] < option.version) {
          Store.set(option.name, JSON.stringify(option));
          storeOption = option;
        }
        finalOption = storeOption;
      }

      // 根据类型分发注册方法
      if (typeof finalOption.value === 'boolean') {
        this.registerBoolOption(finalOption);
      } else {
        this.registerStrOption(finalOption);
      }
    }
  }

  /**
   * 在 Greasy Fork 脚本详情页中加载选项
   *
   * @param scriptId 脚本 ID
   * @param loadOptionContentFn 加载选项内容的函数
   */
  static loadInGreasyfork(scriptId: number, loadOptionContentFn: Function) {
    // 非脚本详情页结束
    if (location.host !== 'greasyfork.org' || location.href.indexOf('/scripts/' + scriptId) == -1) {
      return;
    }
    const selector = {
      scriptLinks: '#script-links',
      scriptOptions: '#script-options',
      scriptContent: '#script-content',
    }
    const $body = $(document.body), $scriptLinks = $(selector.scriptLinks), $scriptContent = $(selector.scriptContent);

    // 添加“脚本设置”选项卡和点击事件
    $scriptLinks.children('li:eq(0)').after(`<li><a href="javascript:;" id="script-options">脚本设置</a></li>`)
    $body.on('click', selector.scriptOptions, () => {
      // 移除其他已选中选项的样式
      const $currentLi = $scriptLinks.children('li.current');
      $currentLi.html(`<a href="${location.href}">${$currentLi.text()}</a>`);
      $currentLi.removeClass('current');
      // 给“脚本设置”选项卡添加选中选项的样式
      const $scriptOptions = $(selector.scriptOptions);
      $scriptOptions.parent().addClass('current');

      loadOptionContentFn($scriptContent);
    });
  }
}