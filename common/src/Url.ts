export default class Url {
  /**
   * 根据 URL 获取路径（排除域名）
   * @param url URL，默认为当前地址
   */
  static getPath(url?: string) {
    if (!url) {
      url = window.location.href;
    }
    const host = window.location.host;
    return url.substring(url.indexOf(host) + host.length);
  }
}
