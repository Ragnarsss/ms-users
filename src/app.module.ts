import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { enviroments } from 'src/enviroments';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: 'tasks',
    //   useFactory: async (http: HttpService) => {
    //     const request = http.get('https://jsonplaceholder.typicode.com/todos');
    //     const tasks = await lastValueFrom(request);
    //     return tasks.data;
    //   },
    // },
  ],
})
export class AppModule {}
