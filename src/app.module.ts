import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';
import { UserService } from './user/user.service';
import { MongooseUsersModule } from './mongoose-users/mongoose-users.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

;@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: false,
      plugins:[ApolloServerPluginLandingPageLocalDefault()]
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'Aa050586.',
      username: 'postgres',
      entities: [UserEntity],
      database: 'postgres',
      synchronize: true,
    }),
    
    UserModule,
    MongooseUsersModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    AuthModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AppModule {}
