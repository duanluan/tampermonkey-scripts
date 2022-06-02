import {Module} from '@nestjs/common';
import {AppController} from '../controller/app.controller';
import {AppService} from '../service/app.service';
import {DoubanModule} from "./douban.module";
import {APP_FILTER, APP_INTERCEPTOR} from "@nestjs/core";
import {ResponseInterceptor} from "../config/interceptor/response.interceptor";
import {HttpExceptionFilter} from "../config/filter/http-exception.filter";

@Module({
  imports: [DoubanModule],
  controllers: [AppController],
  providers: [
    AppService,
    // 返回结果拦截器
    {provide: APP_INTERCEPTOR, useClass: ResponseInterceptor},
    // 错误过滤器
    {provide: APP_FILTER, useClass: HttpExceptionFilter}
  ],
})
export class AppModule {
}
