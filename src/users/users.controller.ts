import { Controller, Get, Post, Req } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  signUp(@Req() req: Request): { name: string; surname: string } {
    return { name: 'a', surname: 'bb' };
  }
}
