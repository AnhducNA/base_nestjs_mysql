import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BaseController } from '@modules/app/base.controller';
import { UsersService } from '@modules/users/users.service';
import { LoginDto } from './login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController extends BaseController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {
    super();
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const accessToken = await this.authService.login(loginDto);
    return this.successResponse(
      {
        data: {
          token: accessToken,
        },
      },
      res,
    );
  }
}
