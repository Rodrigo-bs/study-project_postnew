import express from 'express';
import bodyParser from 'body-parser';

import databaseConfig from './database/database.config';
import routes from './routes/';

class App {
    public express;
    public databaseConfig;

    constructor() {
        this.databaseConfig = databaseConfig;
        this.express = express();

        this.database();
        this.middlaware();
        this.routes();
    }

    private database() {
        this.databaseConfig.initialize()
            .then(async (conn) => {
                await conn.runMigrations();
                console.log('Banco de dados iniciado com sucesso!');
            })
            .catch((err) => {
                console.error('Erro em iniciar o banco de dados', err)
            });
    }

    private middlaware() {
        this.express.use(bodyParser.json());
    }

    private routes() {
        this.express.use(routes);
    }
}

export default new App().express;