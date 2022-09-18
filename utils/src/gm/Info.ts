/**
 * 获取脚本信息
 */
export default class Info {

  static get() {
    // @ts-ignore
    return GM_info.script;
  }

  static getName() {
    return this.get().name;
  }

  static getVersion() {
    return this.get().version;
  }
}
