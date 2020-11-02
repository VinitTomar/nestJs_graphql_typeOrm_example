import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { IncomingMessage } from "http";


@Injectable()
export class JwtAuthGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean {
    const gqlCtx = GqlExecutionContext.create(context);
    const ctx = gqlCtx.getContext();
    const req: IncomingMessage = ctx.req;
    if (req.headers.authorization.split(' ')[1] === 'jwt_token') {
      return true;
    } else {
      throw new ForbiddenException('invalid token', 'User has invalid token');
    }
  }

}