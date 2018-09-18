import { Module } from '@nestjs/common';
import { AppService } from './app.service';

import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://nestmodules:nestmodules@localhost:27018/nestmodules')
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
