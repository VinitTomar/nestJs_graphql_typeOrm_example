import { Field, IntersectionType, ObjectType, OmitType, PartialType, PickType } from "@nestjs/graphql";
import { Author } from "src/author/models/author.model";
import { BasePost } from "../models/base-post.model";

@ObjectType()
export class Post extends IntersectionType(
  PickType(BasePost, ['id'] as const),
  PartialType(OmitType(BasePost, ['id'] as const))
) {

  @Field(() => Author, { nullable: true })
  author?: Author

}

export type Posts = Post[];