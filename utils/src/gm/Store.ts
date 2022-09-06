/**
 * 存储
 */
export default class Store {

  /**
   * 获取
   * @param key 键
   */
  static get(key: string): any {
    // @ts-ignore
    return GM_getValue(key);
  }

  /**
   * 设置
   * @param key 键
   * @param value 值
   */
  static set(key: string, value: any) {
    // @ts-ignore
    GM_setValue(key, value);
  }
}
