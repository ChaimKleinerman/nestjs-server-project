import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  content: string;

  @Field((type) => Boolean)
  checked: boolean;
}
