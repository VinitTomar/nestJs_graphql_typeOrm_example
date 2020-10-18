import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorModule } from "src/author/author.module";
import { PostEntity } from "./entity/post.entity";
import { PostResolver } from "./post.resolver";
import { PostService } from "./post.service";


@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    AuthorModule
  ],
  providers: [
    PostResolver,
    PostService
  ]
})
export class PostModule { }