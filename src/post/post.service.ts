import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthorService } from "src/author/author.service";
import { AuthorEntity } from "src/author/entity/author.entity";
import { Repository } from "typeorm";
import { PostEntity } from "./entity/post.entity";
import { CreatePost } from "./payload/create-post";
import { Post, Posts } from "./payload/post";
import { UpdatePost } from "./payload/update-post";


@Injectable()
export class PostService {

  constructor(
    @InjectRepository(PostEntity) private _postRepository: Repository<PostEntity>,
    private _authorService: AuthorService
  ) { }

  async allPost(): Promise<Posts> {
    return await this._postRepository.find({ relations: ['author'] });
  }

  async postById(id: string): Promise<Post> {
    return await this._postRepository.findOne(id, { relations: ['author'] });
  }

  async addPost(post: CreatePost): Promise<Post> {
    const postAuthor = await this._authorService.findById(post.authorId);
    const newPost = this._postRepository.create(post);
    newPost.author = (postAuthor as AuthorEntity);
    const savedPost = await this._postRepository.save(newPost);
    return savedPost;
  }

  async updatePost(updatePost: UpdatePost): Promise<Post> {
    const newPost = this._postRepository.create(updatePost);
    await this._postRepository.update({ id: newPost.id }, newPost);
    return await this.postById(newPost.id);
  }

  async deletePost(id: string): Promise<Post> {
    const deletedPost = await this.postById(id);
    await this._postRepository.delete({ id });
    return deletedPost;
  }


}