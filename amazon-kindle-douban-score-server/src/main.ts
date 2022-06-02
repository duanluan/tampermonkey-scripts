import {NestFactory} from '@nestjs/core';
import {AppModule} from './module/app.module';
import {HttpExceptionFilter} from "./config/filter/http-exception.filter";
import {ResponseInterceptor} from "./config/interceptor/response.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8361);
}

bootstrap();
