import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { Author } from "../models/author.model";


@InputType()
export class DeleteAuthorRequest extends PickType(Author, ['id'] as const, InputType) {

}