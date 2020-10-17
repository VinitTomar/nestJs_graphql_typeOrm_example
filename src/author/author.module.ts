import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { AuthorEntity } from './entity/author.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorEntity])
  ],
  providers: [
    AuthorResolver,
    AuthorService
  ]
})
export class AuthorModule { }
