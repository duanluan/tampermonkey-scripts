import Store from "../../../utils/src/gm/Store";
import MenuCmd from "../../../utils/src/gm/MenuCmd";

export default class Options {
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
  private static options = [
    {label: '隐藏条幅', name: Options.Keys.removeBar, version: 1, value: false, menuCmdId: null},
    {label: '今日诗词', name: Options.Keys.jinrishici, version: 1, value: false, menuCmdId: null, token: ''}
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
  static registerAll() {
    MenuCmd.register('更多设置', () => {
      window.open('https://greasyfork.org/scripts/440854', '_blank');
    });

    for (const option of this.options) {
      // TODO 【调试】不保留选项的值，每次都从 Store 中获取
      // Store.set(option.name, null);

      let storeOption = null;
      try {
        storeOption = JSON.parse(Store.get(option.name));
      } catch (e) {
        // FIXME 一段时间后可删除 try catch
        console.warn('旧的选项值非 JSON 格式');
        storeOption = option;
      }

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
  static loadInGreasyfork() {
    if (location.host !== 'greasyfork.org' || location.href.indexOf('/scripts/440854') == -1) {
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

      // 添加脚本设置的内容
      let scriptContent = '';
      for (const option of this.options) {
        const storeOption = JSON.parse(Store.get(option.name)), optionName = storeOption.name, optionVal = storeOption.value;

        scriptContent += `<h3>${option.label}</h3>`;
        switch (optionName) {
          case Options.Keys.removeBar:
            scriptContent += `<label><input type="checkbox" id="script-options-${optionName}" ${optionVal ? 'checked' : ''}> 是否隐藏条幅（勾选后将隐藏条幅而不是替换其内容）</label>`;
            break;
          case Options.Keys.jinrishici:
            scriptContent += `<label><input type="checkbox" id="script-options-${optionName}-enabled" ${optionVal ? 'checked' : ''}> 启用<a href="https://www.jinrishici.com" target = "_blank">今日诗词</a>（仍需取消勾选“是否隐藏条幅”才能生效）</label>`;
            break;
        }
      }
      $scriptContent.html(scriptContent);

      // region 添加脚本设置的事件
      // 是否隐藏条幅
      let optionSelector = '#script-options-' + Options.Keys.removeBar;
      $body.on('change', optionSelector, () => {
        const removeBarOption = JSON.parse(Store.get(Options.Keys.removeBar));
        removeBarOption.value = !removeBarOption.value;
        // 重新注册菜单
        MenuCmd.unregister(removeBarOption.menuCmdId);
        this.registerBoolOption(removeBarOption);
      });

      // 启用今日诗词
      optionSelector = '#script-options-' + Options.Keys.jinrishici + '-enabled';
      $body.on('change', optionSelector, () => {
        const jinrishiciOption = JSON.parse(Store.get(Options.Keys.jinrishici));
        jinrishiciOption.value = !jinrishiciOption.value;
        // 重新注册菜单
        MenuCmd.unregister(jinrishiciOption.menuCmdId);
        this.registerBoolOption(jinrishiciOption);
      });
      // endregion
    });
  }
}
