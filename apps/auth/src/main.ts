import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common';
import { AuthModule } from './auth.module';
import { RmqOptions } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'express-handlebars';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AuthModule);
  
  /* add view engine */
  app.useStaticAssets(join(__dirname, '../../..', 'public'))
  app.setBaseViewsDir(join(__dirname, '../../..', 'views'));
  app.engine('hbs', hbs({ extname: 'hbs',defaultLayout: 'index', layoutsDir: join(__dirname, '../../..', 'views/layouts')}));
  app.setViewEngine('hbs');

  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions('AUTH', true));
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
}
bootstrap();
