import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Author {

  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

}

export type Authors = Author[];