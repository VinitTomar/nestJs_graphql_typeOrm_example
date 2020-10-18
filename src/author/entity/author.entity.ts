import { PostEntity } from "src/post/entity/post.entity";
import { Posts } from "src/post/payload/post";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "../models/author.model";


@Entity({
  name: 'author'
})
export class AuthorEntity extends Author {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => PostEntity, (post: PostEntity) => post.author)
  posts: Posts;
}