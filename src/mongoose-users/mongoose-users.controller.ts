import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MongooseUsersService } from './mongoose-users.service';
import { CreateMongooseUserDto } from './dto/create-mongoose-user.dto';
import { UpdateMongooseUserDto } from './dto/update-mongoose-user.dto';

@Controller('mongoose-users')
export class MongooseUsersController {
  constructor(private readonly mongooseUsersService: MongooseUsersService) {}

  @Post()
  create(@Body() createMongooseUserDto: CreateMongooseUserDto) {
    return this.mongooseUsersService.create(createMongooseUserDto);
  }

  @Get()
  findAll() {
    return this.mongooseUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mongooseUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMongooseUserDto: UpdateMongooseUserDto) {
    return this.mongooseUsersService.update(+id, updateMongooseUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mongooseUsersService.remove(+id);
  }
}
