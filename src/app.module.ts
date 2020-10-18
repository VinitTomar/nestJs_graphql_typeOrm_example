import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppResolver } from './app.resolver';
import { AuthorModule } from './author/author.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-34-237-247-76.compute-1.amazonaws.com',
      port: 5432,
      username: 'vghyrwvbckxdxr',
      password: '271a9469262c17dec334bce971d4fa25acaf87401c38769e418d9de0999fec40',
      database: 'dfk1mc0kcupqi0',
      autoLoadEntities: true,
      synchronize: true,
      ssl: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schem.gql',
      path: 'api'
    }),
    AuthorModule,
    PostModule
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule { }
