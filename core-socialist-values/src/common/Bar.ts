export default class Bar {

  static replace(selector, observingSelector) {
    Bar.loopReplaceBar(selector);
    // 监听条幅变化，变化后再次执行
    new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
      Bar.loopReplaceBar(selector);
    }).observe($(observingSelector)[0], {childList: true})
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
    $(selector).html(`
    <div>
      <ul class='csv_ul'><li>富强</li><li>民主</li><li>文明</li><li>和谐</li><li>自由</li><li>平等</li><li>公正</li><li>法治</li><li>爱国</li><li>敬业</li><li>诚信</li><li>友善</li></ul><br>
      <ul class='csv_ul'><li>Prosperity</li><li>Democracy</li><li>Civility</li><li>Harmony</li><li>Freedom</li><li>Equality</li><li>Justice</li><li>Rule of law</li><li>Patriotism</li><li>Dedication</li><li>Integrity</li><li>Friendship</li>
      </ul>
    </div>`);
    $('.csv_ul').css({'listStyle': 'none', 'margin': 0, 'padding': 0, 'width': 'auto'});
    $('.csv_ul li').css({'color': '#DE2910', 'fontSize': '13px', 'fontWeight': 'bold', 'float': 'left', 'padding-right': '10px', 'width': '80px', 'text-align': 'center'});
  }
}