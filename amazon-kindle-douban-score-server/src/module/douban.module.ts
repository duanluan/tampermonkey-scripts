import { Module } from '@nestjs/common';
import {DoubanController} from "../controller/douban.controller";
import {DoubanService} from "../service/douban.service";

@Module({
  imports: [],
  controllers: [DoubanController],
  providers: [DoubanService],
})
export class DoubanModule {}
