import { RoleEnum } from '@common/enum/role.enum';

export interface IFindUser {
  email: string;
  password: string;
}

export interface ICreateUser extends IFindUser {
  role: RoleEnum;
}
