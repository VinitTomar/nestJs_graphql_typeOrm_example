import { InputType, PickType } from "@nestjs/graphql";
import { BasePost } from "../models/base-post.model";

@InputType()
export class DeletePost extends PickType(BasePost, ['id'] as const, InputType) { }