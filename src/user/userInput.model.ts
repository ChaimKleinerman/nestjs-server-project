import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

;

@InputType()
export class UserGraphqlInput {


  @Field()
  name: string;

  @Field()
  userName: string;

  @Field()
  email: string;

  @Field((type) => Int)
  age: number;

  @Field()
  password: string;

  @Field()
  gender: string;
}
