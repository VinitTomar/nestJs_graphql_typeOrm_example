import { AuthorEntity } from "src/author/entity/author.entity";
import { Entity, ManyToOne } from "typeorm";
import { BasePost } from "../models/base-post.model";


@Entity({
  name: 'post'
})
export class PostEntity extends BasePost {

  @ManyToOne(() => AuthorEntity, (author: AuthorEntity) => author.posts)
  author: AuthorEntity;

}