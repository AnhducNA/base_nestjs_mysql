import databaseConfig from '@databases/config';
import { join } from 'path';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

const options = databaseConfig as DataSourceOptions;

const AppDataSourceOption: DataSourceOptions = {
  ...options,
  entities: [join(__dirname, '../entities/*.{js,ts}')],
  migrations: [__dirname + '/migration/*.{js,ts}'],
};
export const AppDataSource = new DataSource(AppDataSourceOption);
