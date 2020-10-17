import { Query, Resolver } from "@nestjs/graphql";


@Resolver()
export class AppResolver {

  @Query(() => String)
  info() {
    return 'Here is graphql learning begins...';
  }

}