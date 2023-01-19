import "reflect-metadata"
import { DataSource } from 'typeorm';

const appDataConfig = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'postnew',
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
    migrationsTableName: 'migrations'
});

export default appDataConfig;