import { Test, TestingModule } from '@nestjs/testing';
import { MongooseUsersService } from './mongoose-users.service';

describe('MongooseUsersService', () => {
  let service: MongooseUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongooseUsersService],
    }).compile();

    service = module.get<MongooseUsersService>(MongooseUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
