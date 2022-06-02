export default class Request {

  static get(key: string) {
    // @ts-ignore
    return GM_getValue(key);
  }

  static set(key: string, value: string) {
    // @ts-ignore
    return GM_setValue(key, value);
  }
}
