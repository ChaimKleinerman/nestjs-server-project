import { Module } from '@nestjs/common';
import { MongooseUsersService } from './mongoose-users.service';
import { MongooseUsersController } from './mongoose-users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/mongoose-user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [MongooseUsersController],
  providers: [MongooseUsersService]
})
export class MongooseUsersModule {}
