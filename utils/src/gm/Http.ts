import {HttpDataType} from "./enum/HttpDataType";
import * as url from "url";

export default class Http {

  static get(option: { url: string, dataType?: HttpDataType, onload: Function }) {
    const onload1 = function (result) {
      let response = result.response;
      // 将返回值转换为 JSON
      if (option.dataType === HttpDataType.JSON) {
        response = JSON.parse(result.response);
      }
      option.onload(response);
    }
    // @ts-ignore
    GM_xmlhttpRequest({method: 'GET', url: option.url, onload: onload1});
  }
}
