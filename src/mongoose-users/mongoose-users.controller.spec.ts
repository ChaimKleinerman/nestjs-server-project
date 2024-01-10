import { Test, TestingModule } from '@nestjs/testing';
import { MongooseUsersController } from './mongoose-users.controller';
import { MongooseUsersService } from './mongoose-users.service';

describe('MongooseUsersController', () => {
  let controller: MongooseUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MongooseUsersController],
      providers: [MongooseUsersService],
    }).compile();

    controller = module.get<MongooseUsersController>(MongooseUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
