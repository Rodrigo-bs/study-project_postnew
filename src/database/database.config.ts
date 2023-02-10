import "reflect-metadata"
import { DataSource } from 'typeorm';

import { User } from "../entity/User";
import { Post } from "../entity/Post";

const appDataConfig = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'postnew',
    synchronize: true,
    logging: true,
    entities: [User, Post],
    migrations: [],
    subscribers: [],
    migrationsTableName: 'migrations'
});

export default appDataConfig;