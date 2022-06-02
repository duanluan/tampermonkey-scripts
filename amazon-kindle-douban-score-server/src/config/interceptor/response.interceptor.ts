import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from '@nestjs/common';
import {map, Observable} from 'rxjs';

/**
 * response 拦截器：https://www.zhangshengrong.com/p/24NjoldDXB/
 */
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const response = context.switchToHttp().getResponse();
    // response.header('Content-Type', 'application/json; charset=utf-8');

    return next.handle().pipe(
      map(data => {
        return {
          data,
          code: 200
        };
      }),
    );
  }
}
