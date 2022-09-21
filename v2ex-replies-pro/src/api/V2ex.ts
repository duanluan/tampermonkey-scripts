import Request from "../../../utils/src/gm/Request";
import {HttpDataType} from "../../../utils/src/gm/enum/HttpDataType";
import Info from "../../../utils/src/gm/Info";
import Store from "../../../utils/src/gm/Store";
import Options from "../Options";

export default class V2ex {

  static BASE_URL = 'https://www.v2ex.com/api/v2/';

  /**
   * 检查 Token 是否有效
   */
  public static async checkToken() {
    const token = JSON.parse(Store.get(Options.Keys.v2exToken)).value;
    if (!token && location.href.indexOf('v2ex.com/settings') == -1) {
      layer.msg('请先在“脚本设置”中填写 Token！', {icon: 4, offset: 'rb'}, () => {
        window.open('https://www.v2ex.com/settings', '_blank');
      });
      return false;
    }
    const result = await Request.get({
      url: this.BASE_URL + 'token',
      dataType: HttpDataType.JSON,
      synchronous: true,
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    if (!result['success']) {
      layer.msg(Info.getName() + "：" + result['message'], {icon: 2, offset: 'rb', time: 5000});
      return false;
    }
    return true;
  }

  /**
   * 获取主题回复
   * @param topicId 主题 ID
   * @param page 页码
   */
  public static async getReplies(topicId: number, page?: number): Promise<{ html: string; id: number, created: number, content: string, content_rendered: string, member: { id: number, username: string, created: number, url: string, avatar: string, bio: string, github: string, website: string } }[]> {
    const result = await Request.get({
      url: this.BASE_URL + 'topics/' + topicId + '/replies' + (page ? '?p=' + page : ''),
      dataType: HttpDataType.JSON,
      synchronous: true,
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(Store.get(Options.Keys.v2exToken)).value
      }
    });

    if (!result['success']) {
      console.warn(Info.getName() + "：" + result['message']);
      return;
    }
    return result['result'];
  }
}
