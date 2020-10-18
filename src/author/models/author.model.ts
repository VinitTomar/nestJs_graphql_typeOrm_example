import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Post, Posts } from "src/post/payload/post";

@ObjectType()
export class Author {

  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Post], { nullable: 'itemsAndList' })
  posts?: Posts;

}

export type Authors = Author[];