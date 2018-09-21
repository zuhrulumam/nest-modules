import { Test, TestingModule } from '@nestjs/testing';
import { CrudController } from './crud.controller';
import { CrudService } from "./crud.service";

import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Crud } from "./structure/crud.interface";
import { CrudDto } from "./structure/crud.dto";

describe('Crud Controller', () => {
  let module: TestingModule;

  let crudController: CrudController;
  let crudService: CrudService;

  let crudModel: Model<Crud>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [
        CrudService,
        {
          provide: getModelToken('Crud'),
          useValue: CrudDto
        }
      ],
      controllers: [CrudController],
    }).compile();

    crudController = module.get<CrudController>(CrudController)
    crudService = module.get<CrudService>(CrudService)
  });

  it('should be defined', () => {
    expect(crudController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all data', async () => {
      const result: CrudDto[] = [{
        name: 'Test',
        email: 'test@test.com'
      }];

      jest.spyOn(crudService, 'findAll').mockImplementation(() => result);

      expect(await crudController.findAll()).toBe(result)
    })
  })

  describe('find one by id', () => {
    it('should return one data', async () => {
      const result: CrudDto = {
        name: 'Test',
        email: 'test@test.com'
      };

      const id: string = '1';

      const spyOn = jest.spyOn(crudService, 'find').mockImplementation(() => result);

      expect(await crudController.find(id)).toBe(result)
      expect(spyOn).toHaveBeenCalled()
      expect(spyOn).toHaveBeenCalledWith(id)
    })
  })

  describe('create one', () => {
    it('should create one crud', async () => {

    })
  })

});
