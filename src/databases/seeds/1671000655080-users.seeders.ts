import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { RoleEnum } from '@enum/role.enum';
import { UsersEntity } from '@entities';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const current = new Date();
    const firstThisWeek = current.getDate() - current.getDay() + 1;
    const users = [
      {
        id: 1,
        email: 'admin@gmail.com',
        password:
          '$2b$10$8NoeFbeBargsDsClhpfkDexfk0RtV6kDSJa/yTOwJ3Wbo3n6e3k/.', //123456
        role: RoleEnum.ADMIN,
        created_at: new Date(
          new Date().setDate(firstThisWeek - 7),
        ).toISOString(),
        updated_at: new Date(
          new Date().setDate(firstThisWeek - 7),
        ).toISOString(),
      },
      {
        id: 2,
        email: 'user@gmail.com',
        password:
          '$2b$10$8NoeFbeBargsDsClhpfkDexfk0RtV6kDSJa/yTOwJ3Wbo3n6e3k/.', //123456
        role: RoleEnum.USER,
        created_at: new Date(
          new Date().setDate(firstThisWeek - 7),
        ).toISOString(),
        updated_at: new Date(
          new Date().setDate(firstThisWeek - 7),
        ).toISOString(),
      },
      {
        id: 3,
        email: 'user2@gmail.com',
        password:
          '$2b$10$8NoeFbeBargsDsClhpfkDexfk0RtV6kDSJa/yTOwJ3Wbo3n6e3k/.', //123456
        role: RoleEnum.USER,
        created_at: new Date(
          new Date().setDate(firstThisWeek - 7),
        ).toISOString(),
        updated_at: new Date(
          new Date().setDate(firstThisWeek - 7),
        ).toISOString(),
      },
    ];
    await connection
      .createQueryBuilder()
      .insert()
      .into(UsersEntity)
      .values(users)
      .execute();
  }
}
