import Store from "../../../utils/src/gm/Store";
import Options from "./Options";

export default class Bar {

  /**
   * 替换条幅
   * @param options {
   *  barSelector: string,              // 条幅选择器
   *  isObserveBar: boolean,            // 是否监听条幅变化
   *  hideBarSelector: string,          // 隐藏条幅选择器
   *  isObserveHideBar: boolean,        // 是否监听隐藏条幅变化
   *  followUpObserveSelector?: string, // 后续监听选择器
   *  replaceCallback?: Function        // 替换后回调
   * }
   */
  static replace(options: { barSelector: string, isObserveBar: boolean, hideBarSelector: string, isObserveHideBar: boolean, followUpObserveSelector?: string, replaceCallback?: Function }) {
    if (!$(options.barSelector).text().match(/ukraine|乌克兰|black|黑人/i)) {
      return;
    }
    // 如果移除横幅
    if (Store.get(Options.Keys.removeBar)) {
      // 隐藏横幅
      $(options.hideBarSelector).hide();
      if (options.isObserveHideBar) {
        let i = 0;
        // 隐藏条幅首次加载：监听条幅变化，变化后再次执行
        const observer = new MutationObserver(() => {
          $(options.hideBarSelector).hide();
          // 替换两次后结束监听
          if (i >= 1) {
            observer.disconnect();
          }
          i++;
        });
        observer.observe($(options.hideBarSelector)[0], {childList: true, subtree: true});
      }

      return;
    }

    // 首次替换横幅
    this.replaceBar(options.barSelector, options.replaceCallback);
    console.log('replaceBar');
    if (!options.isObserveBar) {
      return;
    }
    let i = 0;
    // 条幅首次加载：监听条幅变化，变化后再次执行
    const observer = new MutationObserver(() => {
      this.replaceBar(options.barSelector, options.replaceCallback);
      // 替换两次后结束监听
      if (i >= 1) {
        observer.disconnect();
      }
      i++;
    });
    observer.observe($(options.barSelector)[0], {childList: true});

    if (options.followUpObserveSelector) {
      // 后续变化
      new MutationObserver(() => {
        this.replaceBar(options.barSelector, options.replaceCallback);
      }).observe($(options.followUpObserveSelector)[0], {childList: true});
    }
  }

  /**
   * 替换后的条幅去除空格换行后的文本
   * @private
   */
  private static txt = '富强民主文明和谐自由平等公正法治爱国敬业诚信友善ProsperityDemocracyCivilityHarmonyFreedomEqualityJusticeRuleoflawPatriotismDedicationIntegrityFriendship';

  static replaceSelector = {
    bar: '.csv_bar',
    barUl: '.csv_bar .csv_bar_ul',
  };

  private static replaceBar(selector: string, replaceCallback?: Function) {
    if ($($(selector)[0]).text().replace(/\s+/g, "") === Bar.txt) {
      return;
    }

    $(selector).css({'minHeight': '40px'});
    $(selector).html(`
    <div class="csv_bar">
      <ul class='csv_bar_ul'><li>富强</li><li>民主</li><li>文明</li><li>和谐</li><li>自由</li><li>平等</li><li>公正</li><li>法治</li><li>爱国</li><li>敬业</li><li>诚信</li><li>友善</li></ul><br>
      <ul class='csv_bar_ul'><li>Prosperity</li><li>Democracy</li><li>Civility</li><li>Harmony</li><li>Freedom</li><li>Equality</li><li>Justice</li><li>Rule of law</li><li>Patriotism</li><li>Dedication</li><li>Integrity</li><li>Friendship</li>
      </ul>
    </div>`);

    // 避免出现多个导致样式添加失败
    const $bar = $(this.replaceSelector.bar);
    if ($bar.length == 2) {
      $bar.eq(0).remove();
    }

    const barUlSelector = this.replaceSelector.barUl;
    $(barUlSelector).css({'display': 'inline-block', 'listStyle': 'none', 'margin': 0, 'padding': 0, 'width': 'auto'});
    $(barUlSelector + ' li').css({'color': '#DE2910', 'fontWeight': 'bold', 'fontFamily': 'KaiTi', 'float': 'left', 'paddingRight': '10px', 'min-width': '80px', 'textAlign': 'center'});
    $(barUlSelector + ':first').css('verticalAlign', 'bottom');
    $(barUlSelector + ':first li').css('fontSize', '18px');
    $(barUlSelector + ':eq(1) li').css('fontSize', '13px');

    if (replaceCallback) {
      replaceCallback();
    }
  }
}
