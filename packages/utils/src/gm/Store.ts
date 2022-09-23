import { GM_getValue, GM_setValue } from 'vite-plugin-monkey/dist/client';

/**
 * 存储
 */
export default class Store {
  /**
   * 获取
   * @param key 键
   */
  static get(key: string): any {
    return GM_getValue(key, undefined);
  }

  /**
   * 设置
   * @param key 键
   * @param value 值
   */
  static set(key: string, value: any) {
    GM_setValue(key, value);
  }
}
