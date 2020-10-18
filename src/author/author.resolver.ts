import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "src/post/payload/post";
import { AuthorService } from "./author.service";
import { Author } from "./models/author.model";
import { CreateAuthorRequest } from "./payload/create-author.request";
import { DeleteAuthorRequest } from "./payload/delete-author.request";
import { UpdateAuthorRequest } from "./payload/update-author.request";


@Resolver(() => Author)
export class AuthorResolver {

  constructor(
    private _authorService: AuthorService
  ) { }

  @Query(() => [Author], { name: 'authors', nullable: 'items' })
  async allAuthors() {
    return await this._authorService.findAll();
  }

  @Query(() => Author, { name: 'author', nullable: true })
  async findById(@Args('id', { type: () => ID }) authorId: string) {
    return await this._authorService.findById(authorId);
  }

  @Mutation(() => Author, { name: 'createAuthor' })
  async createAuthor(@Args('CreateAuthor') newAuthor: CreateAuthorRequest) {
    return await this._authorService.add(newAuthor);
  }

  @Mutation(() => Author, { name: 'updateAuthor' })
  async updateAuthor(@Args('UpdateAuthor') updateAuthor: UpdateAuthorRequest) {
    return await this._authorService.update(updateAuthor.id, updateAuthor);
  }

  @Mutation(() => Author, { name: 'deleteAuthor' })
  async deleteAuthor(@Args('DeleteAuthor') deleteAuthor: DeleteAuthorRequest) {
    return await this._authorService.delete(deleteAuthor.id);
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    return author.posts;
  }

}