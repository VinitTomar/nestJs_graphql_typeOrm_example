import { InputType, OmitType } from "@nestjs/graphql";
import { Author } from "../models/author.model";

@InputType()
export class UpdateAuthorRequest extends OmitType(Author, ['posts'] as const, InputType) {

}