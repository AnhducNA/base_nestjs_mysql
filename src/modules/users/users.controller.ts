import { BaseController } from '@modules/app/base.controller';
import { Controller, Get, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController extends BaseController {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  @Get()
  async getAllUsers(@Res() res: any) {
    return this.successResponse({ data: { a: 123 } }, res);
  }
}
