import { Sequelize } from 'sequelize/types';

class Database {
    constructor() {
        if (! Database._instance) {
            this._sequelize = new Sequelize({
                database: process.env.DB_NAME,
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                dialect: process.env.DB_DIALECT, // imagine not using typescript: //as Dialect,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                models: Object.values(models),
                logging: (message) => this.setupLogging(message)
                
            });
            this._instance = this;
        }

        return Database._instance;

    }

}

const instance = new Database();
Object.freeze(instance);
export default instance;