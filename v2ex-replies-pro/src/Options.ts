import CommonOptions from "@utils/CommonOptions";
import Store from "@utils/gm/Store";

export default class Options {

  /**
   * 选项 Key
   */
  static Keys = {
    v2exToken: 'v2exToken',
  }

  /**
   * 选项
   * @private
   */
  protected static options = [
    {label: 'V2EX Token', name: this.Keys.v2exToken, version: 1, value: '', menuCmdId: null},
  ];

  /**
   * 注册所有选项
   */
  static registerAll() {
    CommonOptions.registerAll(this.options, 'https://www.v2ex.com/settings');
  }

  /**
   * 在页面中加载选项
   */
  static loadInV2ex() {
    if (location.href.indexOf('v2ex.com/settings') == -1) {
      return;
    }
    const selector = {
        menuTab: 'a.tab',
        currentMenuTab: 'a.tab_current',
        scriptOptions: '#script-options',
        scriptContent: '#Main .box',

        v2exTokenInput: 'input[name="v2exToken"]',
        saveOptionsBtn: '#save-options',
      },
      $body = $(document.body), $menuTab = $(selector.menuTab);

    // 添加脚本设置的选项卡
    $menuTab.parent().append(`<a id="script-options" class="tab" href="javascript:void(0);">脚本设置</a>`);
    // 脚本设置选项点击事件
    $body.on('click', selector.scriptOptions, () => {
      // 移除已选中选项的样式
      const $currentMenuTab = $(selector.currentMenuTab);
      $currentMenuTab.removeClass('tab_current');
      $currentMenuTab.addClass('tab');

      // 添加选中选项的样式
      const $scriptOptions = $(selector.scriptOptions);
      $scriptOptions.removeClass('tab');
      $scriptOptions.addClass('tab_current');

      // 添加脚本设置的内容
      $(selector.scriptContent + ' div:gt(1)').remove();
      $(selector.scriptContent).append(`
        <form>
          <div class="inner">
            <div class="topic_content markdown_body">
              <!--<p><a href="https://www.v2ex.com/settings/tokens" target="_blank">获取 V2EX Token</a></p>          -->
            </div>
            <div class="sep20"></div>
            <div class="social-settings-form">
              <div>
                <div><a href="https://www.v2ex.com/settings/tokens" target="_blank">V2EX Token</a>：</div>
                <input type="password" class="sl" name="v2exToken" value="${JSON.parse(Store.get(this.Keys.v2exToken)).value}">
              </div>
            </div>
          </div>
          <div class="cell_ops">
            <input id="save-options" type="submit" class="super normal button" value="Save">
          </div>
        </form>
      `);

      $body.on('click', selector.saveOptionsBtn, () => {
        const token = $(selector.v2exTokenInput).val();
        Store.set(this.Keys.v2exToken, JSON.stringify({...JSON.parse(Store.get(this.Keys.v2exToken)), ...{value: token}}));
        layer.msg('保存成功');
        return false;
      });
    });
  }
}
