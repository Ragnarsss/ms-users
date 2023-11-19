import { Module, Global } from '@nestjs/common';

const API_KEY = '123';
const APIKEY_PROD = 'PROD';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? APIKEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
