import {HttpDataType} from "./enum/HttpDataType";

export default class Request {

  static async get(option: { url: string, dataType?: HttpDataType, synchronous?: boolean, headers?: {}, onload?: Function }): Promise<any> {
    option['method'] = 'GET';

    // 同步时返回 Promise
    if (option.synchronous) {
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          ...option,
          onload: (response) => {
            resolve(option.dataType === HttpDataType.JSON ? JSON.parse(response.responseText) : response.responseText);
          },
          onerror: (error) => {
            reject(error);
          }
        });
      })
    } else {
      const onload1 = function (details) {
        let response;
        if (option.dataType === HttpDataType.JSON) {
          response = JSON.parse(details.responseText);
        } else {
          response = details.response;
        }
        option.onload(response);
      }
      GM_xmlhttpRequest({...option, onload: onload1});
    }
  }
}
