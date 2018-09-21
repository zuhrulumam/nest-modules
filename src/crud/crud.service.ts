import { Injectable } from '@nestjs/common';

import { CrudDto } from "./structure/crud.dto";
import { Crud } from "./structure/crud.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class CrudService {
  constructor(
    @InjectModel('Crud') private readonly crudModel: Model<Crud>
    // @InjectModel('Crud') private readonly crudModel: typeof Model
  ) { }

  async findAll(): Promise<Crud[]> {
    return await this.crudModel.find();
  }

  async find(id: String): Promise<Crud> {
    return await this.crudModel.findById(id);
  }
}
