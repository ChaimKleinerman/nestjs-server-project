import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserGraphqlInput } from '../userInput.model';
import { UserGraphqlOutput } from '../userOutput.model';

@Resolver(() => UserGraphqlInput)
export class UsersResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => UserGraphqlOutput)
  createUser(@Args('userGraphqlInput') userGraphqlInput: UserGraphqlInput) {
    return this.userService.createUser(userGraphqlInput);
  }
 
  @Query(() => [UserGraphqlOutput])
   @Query((returns) => String)
   stam(){
    return 'heelo';
   }

  

  
  
}
