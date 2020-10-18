import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthorEntity } from "./entity/author.entity";
import { Author, Authors } from "./models/author.model";
import { CreateAuthorRequest } from "./payload/create-author.request";
import { UpdateAuthorRequest } from "./payload/update-author.request";


@Injectable()
export class AuthorService {

  constructor(
    @InjectRepository(AuthorEntity) private _authorRepository: Repository<AuthorEntity>
  ) { }

  async findById(id: string): Promise<Author> {
    return await this._authorRepository.findOne(id, { relations: ['posts'] });
  }

  async findAll(): Promise<Authors> {
    return await this._authorRepository.find({ relations: ['posts'] });
  }

  async add(author: CreateAuthorRequest): Promise<Author> {
    const createAuthor = this._authorRepository.create(author);
    const newAuthor = await this._authorRepository.save(createAuthor);
    return newAuthor;
  }

  async delete(authorId: string) {
    const deletedAuthor = await this.findById(authorId);
    this._authorRepository.delete({ id: authorId });
    return deletedAuthor;
  }


  async update(id: string, detail: UpdateAuthorRequest): Promise<Author> {
    delete detail.id;
    const updateAuthor = this._authorRepository.create(detail);
    await this._authorRepository.update({ id }, updateAuthor);
    const author = await this.findById(id);
    return author;
  }

}