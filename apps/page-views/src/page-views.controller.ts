import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { PageViewsService } from './page-views.service';

@Controller()
export class PageViewsController {
  constructor(private readonly pageViewsService: PageViewsService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render(
      this.pageViewsService.getViewName(),
      { message: 'Hello world!' },
    );
  }
}
