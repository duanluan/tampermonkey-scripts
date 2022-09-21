/**
 * 选项菜单
 */
export default class MenuCmd {

  /**
   * 注册
   * @param name 名称
   * @param fn 点击菜单时执行的函数
   */
  static register(name: string, fn: () => void): number {
    return GM_registerMenuCommand(name, fn);
  }

  /**
   * 注销
   * @param menuCmdId 注册时返回的 ID
   */
  static unregister(menuCmdId: number) {
    GM_unregisterMenuCommand(menuCmdId);
  }
}
