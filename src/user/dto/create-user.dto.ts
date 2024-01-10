import { InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  name: string;

  userName: string;

  email: string;

  age: number;

  gender: string;

  password: string;
}
