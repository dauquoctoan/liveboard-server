import { Test, TestingModule } from '@nestjs/testing';
import { PageViewsController } from './page-views.controller';
import { PageViewsService } from './page-views.service';

describe('PageViewsController', () => {
  let pageViewsController: PageViewsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PageViewsController],
      providers: [PageViewsService],
    }).compile();

    pageViewsController = app.get<PageViewsController>(PageViewsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(pageViewsController.getHello()).toBe('Hello World!');
    });
  });
});
