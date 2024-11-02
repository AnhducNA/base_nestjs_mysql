import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BaseController } from '@modules/app/base.controller';
import { UsersService } from '@modules/users/users.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { RegisterDto } from './dto/register.dto';
import { logger } from '@logs/app.log';
import { CustomizeException } from '@exception/customize.exception';

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
  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
    try {
      await this.userService.createUser(registerDto);
      return this.successResponse(
        {
          message: 'success',
        },
        res,
      );
    } catch (e) {
      logger.error('register errors: ' + e.message);
      throw new CustomizeException(
        e.message.toString(),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
