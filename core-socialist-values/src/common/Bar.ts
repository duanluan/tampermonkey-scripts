import Store from "../../../utils/src/gm/Store";
import Http from "../../../utils/src/gm/Http";
import Options from "./Options";
import {HttpDataType} from "../../../utils/src/gm/enum/HttpDataType";

export default class Bar {

  /**
   * 替换条幅的选择器
   */
  static replaceBarSelector = {
    bar: '.csv_bar',
    barUl: '.csv_bar .csv_bar_ul',
  };
  /**
   * 替换后的条幅去除空格换行后的文本
   * @private
   */
  private static txt = '富强民主文明和谐自由平等公正法治爱国敬业诚信友善ProsperityDemocracyCivilityHarmonyFreedomEqualityJusticeRuleoflawPatriotismDedicationIntegrityFriendship';
  /**
   * 是否启用今日诗词
   * @private
   */
  private static storeJinrishiciVal = false;
  /**
   * 今日诗词内容
   * @private
   */
  private static jinrishiciContent = '';

  /**
   * 替换条幅
   * @param options {
   *   barSelector: string,              // 条幅选择器
   *   isObserveBar: boolean,            // 是否监听条幅变化
   *   hideBarSelector: string,          // 隐藏条幅选择器
   *   isObserveHideBar: boolean,        // 是否监听隐藏条幅变化
   *   followUpObserveSelector?: string, // 后续监听选择器
   *   csvCallback?: Function        // 替换后回调
   * }
   */
  static replace(options: { barSelector: string, isObserveBar: boolean, hideBarSelector: string, isObserveHideBar: boolean, followUpObserveSelector?: string, csvCallback?: Function, jinrishiciCallback?: Function }) {
    if (!$(options.barSelector).text().match(/ukraine|乌克兰|black|黑人/i)) {
      return;
    }

    // 如果移除横幅
    if (JSON.parse(Store.get(Options.Keys.removeBar)).value) {
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

    this.storeJinrishiciVal = JSON.parse(Store.get(Options.Keys.jinrishici)).value;
    if (this.storeJinrishiciVal) {
      this.getJinrishici().then((data: any) => {
        this.jinrishiciContent = data;
        this.replaceObserver(options);
      });
    } else {
      this.replaceObserver(options);
    }
  }

  /**
   * 替换条幅监听
   * @param options
   * @private
   */
  private static replaceObserver(options: { barSelector: string, isObserveBar: boolean, hideBarSelector: string, isObserveHideBar: boolean, followUpObserveSelector?: string, csvCallback?: Function, jinrishiciCallback?: Function }) {
    // 首次替换横幅
    this.replaceBar(options.barSelector, options.csvCallback, options.jinrishiciCallback);
    if (!options.isObserveBar) {
      return;
    }
    let i = 0;
    // 条幅首次加载：监听条幅变化，变化后再次执行
    const observer = new MutationObserver(() => {
      this.replaceBar(options.barSelector, options.csvCallback, options.jinrishiciCallback);
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
        this.replaceBar(options.barSelector, options.csvCallback, options.jinrishiciCallback);
      }).observe($(options.followUpObserveSelector)[0], {childList: true});
    }
  }

  /**
   * 实际替换条幅
   * @param selector 条幅选择器
   * @param csvCallback 替换后回调
   * @param jinrishiciCallback 替换为今日诗词后回调
   * @private
   */
  private static replaceBar(selector: string, csvCallback?: Function, jinrishiciCallback?: Function) {
    if ($($(selector)[0]).text().replace(/\s+/g, "") === Bar.txt) {
      return;
    }

    if (this.storeJinrishiciVal) {
      $(selector).css({'minHeight': '30px', 'lineHeight': '30px'});
      $(selector).html(`
        <div class="csv_bar">
          ${this.jinrishiciContent}
        </div>`
      );
      if (jinrishiciCallback) {
        jinrishiciCallback();
      }
      return;
    }

    $(selector).css({'minHeight': '40px'});
    $(selector).html(`
        <div class="csv_bar">
          <ul class='csv_bar_ul'><li>富强</li><li>民主</li><li>文明</li><li>和谐</li><li>自由</li><li>平等</li><li>公正</li><li>法治</li><li>爱国</li><li>敬业</li><li>诚信</li><li>友善</li></ul><br>
          <ul class='csv_bar_ul'><li>Prosperity</li><li>Democracy</li><li>Civility</li><li>Harmony</li><li>Freedom</li><li>Equality</li><li>Justice</li><li>Rule of law</li><li>Patriotism</li><li>Dedication</li><li>Integrity</li><li>Friendship</li>
          </ul>
        </div>`
    );

    // 避免出现多个导致样式添加失败
    const $bar = $(this.replaceBarSelector.bar);
    if ($bar.length == 2) {
      $bar.eq(0).remove();
    }

    const barUlSelector = this.replaceBarSelector.barUl;
    $(barUlSelector).css({'display': 'inline-block', 'listStyle': 'none', 'margin': 0, 'padding': 0, 'width': 'auto'});
    $(barUlSelector + ' li').css({'color': '#DE2910', 'fontWeight': 'bold', 'fontFamily': 'KaiTi', 'float': 'left', 'paddingRight': '10px', 'min-width': '80px', 'textAlign': 'center'});
    $(barUlSelector + ':first').css('verticalAlign', 'bottom');
    $(barUlSelector + ':first li').css('fontSize', '18px');
    $(barUlSelector + ':eq(1) li').css('fontSize', '13px');

    if (csvCallback) {
      csvCallback();
    }
  }

  /**
   * 获取今日诗词
   * @private
   */
  static async getJinrishici() {
    let jinrishiciOption = JSON.parse(Store.get(Options.Keys.jinrishici));
    if (!jinrishiciOption.value) {
      return;
    }

    let response = await Http.get({
      url: 'https://v2.jinrishici.com/one.json',
      dataType: HttpDataType.JSON,
      // headers: {
      //   'X-User-Token': jinrishiciOption.token,
      // },
      synchronous: true
    });

    // @ts-ignore
    if (!response || response.status !== 'success') {
      console.error('今日诗词获取失败', response);
    }
    // // 存储 Token
    // if (jinrishiciOption.token !== response.data.token) {
    //   jinrishiciOption.token = response.data.token;
    //   Store.set(Options.Keys.jinrishici, JSON.stringify(jinrishiciOption));
    // }
    // @ts-ignore
    return response.data.content + ' —— ' + response.data.origin.author + '《' + response.data.origin.title + '》';
  }
}
