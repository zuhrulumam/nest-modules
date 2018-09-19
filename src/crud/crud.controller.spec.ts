import { Test, TestingModule } from '@nestjs/testing';
import { CrudController } from './crud.controller';
import { CrudService } from "./crud.service";

import { getModelToken } from "@nestjs/mongoose";


describe('Crud Controller', () => {
  let module: TestingModule;

  let crudController: CrudController;
  let crudService: CrudService;
  let crudModel = {};

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [
        CrudService,
        {
          provide: getModelToken('crud'),
          useValue: crudModel
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
      expect(await crudController.findAll()).toEqual({})
    })
  })

});
