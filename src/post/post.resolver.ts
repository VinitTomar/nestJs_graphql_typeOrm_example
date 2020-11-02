import { UseGuards } from "@nestjs/common";
import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "src/security/jwt-auth.guard";
import { CreatePost } from "./payload/create-post";
import { DeletePost } from "./payload/delete-post";
import { Post } from "./payload/post";
import { UpdatePost } from "./payload/update-post";
import { PostService } from "./post.service";


@Resolver(() => Post)
@UseGuards(JwtAuthGuard)
export class PostResolver {

  constructor(
    private _postService: PostService
  ) { }

  @Query(() => [Post], { name: `${Post.name}s`, nullable: 'items' })
  async getAllPost() {
    return await this._postService.allPost();
  }

  @Query(() => Post, { name: Post.name })
  async getById(@Args('id', { type: () => ID }) postId: string) {
    return await this._postService.postById(postId);
  }

  @Mutation(() => Post, { name: 'createPost' })
  async createPost(@Args(CreatePost.name) createPost: CreatePost) {
    return await this._postService.addPost(createPost);
  }

  @Mutation(() => Post)
  async updatePost(@Args(UpdatePost.name) updatePost: UpdatePost) {
    return await this._postService.updatePost(updatePost);
  }

  @Mutation(() => Post)
  async deletePost(@Args(DeletePost.name) deletePost: DeletePost) {
    return await this._postService.deletePost(deletePost.id);
  }

  @ResolveField()
  async author(@Parent() post: Post) {
    return post.author;
  }

}