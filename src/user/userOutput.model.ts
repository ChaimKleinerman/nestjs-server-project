import { Field, InputType, ObjectType } from '@nestjs/graphql';

;

@ObjectType()
export class UserGraphqlOutput {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  userName: string;

  @Field((type) => String)
  email: string;

  @Field((type) => Number)
  age: number;

  @Field((type) => String)
  password: string;

  @Field((type) => String)
  gender: string;
}
