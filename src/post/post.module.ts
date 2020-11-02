import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorModule } from "src/author/author.module";
import { JwtAuthGuard } from "src/security/jwt-auth.guard";
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
    PostService,
    JwtAuthGuard
  ],
  // controllers: [PostResolver]
})
export class PostModule { }