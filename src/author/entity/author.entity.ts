import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "../models/author.model";


@Entity({
  name: 'author'
})
export class AuthorEntity extends Author {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}