import { Module } from '@nestjs/common';
import { PageViewsController } from './page-views.controller';
import { PageViewsService } from './page-views.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: './apps/page-views/.env',
    isGlobal: true,
  })],
  controllers: [PageViewsController],
  providers: [PageViewsService],
})
export class PageViewsModule {}
