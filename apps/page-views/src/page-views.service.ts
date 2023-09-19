import { Injectable } from '@nestjs/common';

@Injectable()
export class PageViewsService {
  getViewName(): string {
    return 'index';
  }

  getHello(): string {
    return 'Hello World!';
  }
}
