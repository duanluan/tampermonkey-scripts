import Bar from "../common/Bar";

export default class SvelteMaterialUi {

  static selectors = {
    inject: '#smui-csv-bar',
  }

  static replace() {
    if (location.host !== 'sveltematerialui.com') {
      return
    }

    // 移除 body 上的相关类（包括 ukraine 和 transrights），隐藏原伪元素条幅
    $('body').removeClass('ukraine transrights')

    // 手动插入一个容器作为 Bar 的挂载点
    // 注意：Bar.replace 内部会检测文本是否包含 ukraine，所以必须预填该文本触发替换逻辑
    if ($(this.selectors.inject).length === 0) {
      $('body').prepend(`<div id="${this.selectors.inject.substring(1)}" style="text-align: center;">ukraine</div>`)
    }

    // 调用通用替换逻辑
    Bar.replace({
      barSelector: this.selectors.inject,
      isObserveBar: false // 手动插入的静态节点通常不需要监听变化
    })
  }
}