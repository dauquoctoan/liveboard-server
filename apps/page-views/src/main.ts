import { NestFactory } from '@nestjs/core';
import { PageViewsModule } from './page-views.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(PageViewsModule);
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', '..', '..', 'views'));
  app.setViewEngine('hbs');
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}

bootstrap();
