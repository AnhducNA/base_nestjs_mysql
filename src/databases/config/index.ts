import { env } from '@env';

interface DatabaseConfigInterface {
  type: string;
  database: string;
  host: string;
  port: number;
  username: string;
  password: string;
  synchronize: boolean;
  logging: boolean;
}

const { db } = env;

const databaseConfig = {} as DatabaseConfigInterface;

console.log('Connect to database: ', db.dialect);

switch (db.dialect) {
  case 'sqlite':
    databaseConfig.type = 'sqlite';
    databaseConfig.database = db.storage;
    databaseConfig.synchronize = db.synchronize;
    databaseConfig.logging = db.logging;
    break;
  case 'mysql':
    databaseConfig.type = 'mysql';
    databaseConfig.database = db.database;
    databaseConfig.host = db.host;
    databaseConfig.port = db.port;
    databaseConfig.username = db.username;
    databaseConfig.password = db.password;
    databaseConfig.synchronize = db.synchronize;
    databaseConfig.logging = db.logging;
    break;
  default:
    databaseConfig.type = 'sqlite';
    databaseConfig.database = db.storage;
    databaseConfig.synchronize = db.synchronize;
    databaseConfig.logging = db.logging;
    break;
}
export default databaseConfig;
