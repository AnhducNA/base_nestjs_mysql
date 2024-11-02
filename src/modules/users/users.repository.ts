import { Users } from '@entities/users.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository extends Repository<Users> {
  constructor(private dataSource: DataSource) {
    super(Users, dataSource.createEntityManager());
  }

  async getByEmail(email: string): Promise<Users> {
    const user = await this.findOne({
      select: ['id', 'email', 'password'],
      where: { email: email },
    });
    if (!user) {
      return null;
    }
    return user;
  }

  async validateUser(email: string, password: string): Promise<Users> {
    const user = await this.findOne({
      select: ['id', 'email', 'password'],
      where: { email: email },
    });
    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }
}
