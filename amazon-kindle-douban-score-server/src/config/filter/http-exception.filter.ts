import {ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger} from '@nestjs/common';

/**
 * 错误请求过滤器：https://www.zhangshengrong.com/p/24NjoldDXB/
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    const msg = exception.message;
    Logger.error('error: ', msg);

    response.send({
      code: 500,
      msg
    })
  }
}
