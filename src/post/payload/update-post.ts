import { InputType, OmitType } from "@nestjs/graphql";
import { Post } from "./post";

@InputType()
export class UpdatePost extends OmitType(Post, ['author'] as const, InputType) { }