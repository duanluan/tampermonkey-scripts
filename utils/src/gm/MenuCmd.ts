/**
 * 设置菜单
 */
export default class MenuCmd {

  /**
   * 注册
   * @param name 名称
   * @param fn 点击菜单时执行的函数
   */
  static register(name: string, fn: Function): number {
    // @ts-ignore
    return GM_registerMenuCommand(name, fn);
  }

  /**
   * 注销
   * @param menuCmdId 注册时返回的 ID
   */
  static unregister(menuCmdId: number) {
    // @ts-ignore
    GM_unregisterMenuCommand(menuCmdId);
  }
}
