import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
    type: "mysql",
    host: "localhost",
    username: "appuser",
    password: "Hello@1234",
    database: "photo_manager",
    entities: ["dist/src/**/*.entity.js"],
    synchronize: true
};

export default config;