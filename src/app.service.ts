import { Injectable, Inject } from '@nestjs/common';
import config from './config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    // @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private cfg: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    return this.cfg.apiKey + this.cfg.database.name;
  }
}
