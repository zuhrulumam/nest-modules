import { Module } from '@nestjs/common';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';

import { MongooseModule, getModelToken } from "@nestjs/mongoose";
import { CrudSchema } from "./structure/crud.schema";

import { CrudDto } from "./structure/crud.dto";


@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Crud',
      schema: CrudSchema
    }])
  ],
  controllers: [CrudController],
  providers: [
    CrudService
  ]
})
export class CrudModule { }
