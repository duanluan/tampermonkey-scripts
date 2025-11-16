export default class Angular {

  static selectors = {
    logo: 'img[src="/images/logos/jenkins/Jenkins-stop-the-war.svg"]',
    pageTitle: '.page-title'
  }

  static replace() {
    if (location.host !== 'www.jenkins.io') {
      return
    }
    // 替换图标
    $(this.selectors.logo).replaceWith(`<img src="/images/logos/jenkins/Jenkins.svg">`)

    // 删除通知
    $(this.selectors.pageTitle).nextAll("p").each((i, el) => {
      const $el = $(el)
      if ($el.text().toLowerCase().indexOf('ukraine') != -1) {
        $el.remove()
      }
    })
    $(this.selectors.pageTitle).parent().append('<br><br><br>')
  }
}
