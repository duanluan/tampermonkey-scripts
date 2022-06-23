export default class Bar {

  /**
   * 替换条幅
   * @param selector 条幅选择器
   * @param observingSelector 变化选择器
   */
  static replace(selector, observingSelector) {
    if (!$(selector).text().match(/ukraine|乌克兰|black|黑人/i)) {
      return;
    }
    Bar.loopReplaceBar(selector);
    if (observingSelector) {
      // 监听条幅变化，变化后再次执行
      new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
        Bar.loopReplaceBar(selector);
      }).observe($(observingSelector)[0], {childList: true})
    }
  }

  private static txt = '富强民主文明和谐自由平等公正法治爱国敬业诚信友善ProsperityDemocracyCivilityHarmonyFreedomEqualityJusticeRuleoflawPatriotismDedicationIntegrityFriendship';

  // 循环替换条幅
  private static loopReplaceBar(selector) {
    if ($($(selector)[0]).text().replace(/\s+/g, "") === Bar.txt) {
      return;
    }
    const isStop = setInterval(function () {
      if ($($(selector)[0]).text().replace(/\s+/g, "") === Bar.txt) {
        clearInterval(isStop);
      }
      Bar.replaceBar(selector);
    }, 1000);
  }

  private static replaceBar(selector) {
    const barSelector = '.csv_bar', barUlSelector = barSelector + ' .csv_bar_ul';

    $(selector).css({'minHeight': '40px'});
    $(selector).html(`
    <div class="csv_bar">
      <ul class='csv_bar_ul'><li>富强</li><li>民主</li><li>文明</li><li>和谐</li><li>自由</li><li>平等</li><li>公正</li><li>法治</li><li>爱国</li><li>敬业</li><li>诚信</li><li>友善</li></ul><br>
      <ul class='csv_bar_ul'><li>Prosperity</li><li>Democracy</li><li>Civility</li><li>Harmony</li><li>Freedom</li><li>Equality</li><li>Justice</li><li>Rule of law</li><li>Patriotism</li><li>Dedication</li><li>Integrity</li><li>Friendship</li>
      </ul>
    </div>`);

    // 避免出现多个导致样式添加失败
    const $bar = $(barSelector);
    if ($bar.length == 2) {
      $bar.eq(0).remove();
    }

    $(barUlSelector).css({'display': 'inline-block', 'listStyle': 'none', 'margin': 0, 'padding': 0, 'width': 'auto'});
    $(barUlSelector + ' li').css({'color': '#DE2910', 'fontWeight': 'bold', 'fontFamily': 'KaiTi', 'float': 'left', 'paddingRight': '10px', 'min-width': '80px', 'textAlign': 'center'});
    $(barUlSelector + ':first').css('verticalAlign', 'bottom');
    $(barUlSelector + ':first li').css('fontSize', '18px');
    $(barUlSelector + ':eq(1) li').css('fontSize', '13px');
  }
}
