import { Inject, Injectable } from '@nestjs/common';
import { CreateMongooseUserDto } from './dto/create-mongoose-user.dto';
import { UpdateMongooseUserDto } from './dto/update-mongoose-user.dto';
import { Model } from 'mongoose';
import  {UserModel}  from './interface/userInterfac';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class MongooseUsersService {
  constructor(@InjectModel('User') private readonly UserModel:Model<UserModel>) {}

  async create(createMongooseUserDto: CreateMongooseUserDto) {
    const user = new this.UserModel(createMongooseUserDto);
    return await user.save();

  }

  findAll() {
    return `This action returns all mongooseUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mongooseUser`;
  }

  update(id: number, updateMongooseUserDto: UpdateMongooseUserDto) {
    return `This action updates a #${id} mongooseUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} mongooseUser`;
  }
}
