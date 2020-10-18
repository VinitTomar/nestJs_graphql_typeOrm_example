import { Field, ID, InputType, OmitType } from "@nestjs/graphql";
import { BasePost } from "../models/base-post.model";

@InputType()
export class CreatePost extends OmitType(BasePost, ['id'] as const, InputType) {

  @Field(() => ID)
  authorId: string;

}