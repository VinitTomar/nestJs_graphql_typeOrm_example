import { InputType, ObjectType, OmitType, PickType } from "@nestjs/graphql";
import { Author } from "../models/author.model";


@InputType()
export class CreateAuthorRequest extends PickType(Author, ['firstName', 'lastName'] as const, InputType) {

}