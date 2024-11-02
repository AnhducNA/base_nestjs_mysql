import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { plainToClass } from 'class-transformer';
import { UsersRepository } from './users.repository';
import { ICreateUser } from '@shared/interfaces/user.interface';
import { Users } from '@entities/users.entity';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async getByEmail(email: string) {
    return this.usersRepository.getByEmail(email);
  }

  async createUser(params: ICreateUser) {
    const paramCreate: ICreateUser = plainToClass(Users, {
      email: params.email,
      password: await bcrypt.hash(params.password, 10),
      role: params.role,
    });
    const newData = await this.usersRepository.save(paramCreate);
    return { id: newData.id, email: newData.email, role: newData.role };
  }
}
