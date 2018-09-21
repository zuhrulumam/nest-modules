import {
  Controller,
  Get,
  Param
} from '@nestjs/common';
import { CrudService } from "./crud.service";

import { Crud } from "./structure/crud.interface";

@Controller('crud')
export class CrudController {

  constructor(
    private crudService: CrudService
  ) { }

  @Get()
  async findAll(): Promise<Crud[]> {
    return this.crudService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: String): Promise<Crud> {
    return this.crudService.find(id);
  }
}
