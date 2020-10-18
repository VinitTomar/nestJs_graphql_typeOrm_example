import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, PrimaryGeneratedColumn } from "typeorm";


@ObjectType({
  isAbstract: true
})
export class BasePost {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  title: string;

  @Column({ nullable: true })
  @Field()
  description: string;

}