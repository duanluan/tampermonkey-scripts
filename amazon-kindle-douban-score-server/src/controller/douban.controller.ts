import {Controller, Get, Query} from '@nestjs/common';
import {DoubanService} from "../service/douban.service";

/**
 * 豆瓣 Controller
 */
@Controller('douban')
export class DoubanController {
  constructor(private readonly doubanService: DoubanService) {
  }

  /**
   * 搜索
   * @param query name: 名称, authors: 作者
   */
  @Get('subjectSearch')
  async subjectSearch(@Query() query): Promise<any[]> {
    if (!query.name) {
      return;
    }
    console.log(query)
    return this.doubanService.subjectSearch({name: query.name, author: query.authors});
  }
}
