import path from "path";
import { DataSource } from "typeorm";


const AppDataSource = new DataSource({
    type: "postgres",
    host:"localhost",
    password:"12060501",
    port:5432,
    username:"postgres",
    database:"n37",
    entities: [
      path.resolve(__dirname, '..', 'entities', '*.entities.{ts,js}'),
    ],
    migrations: [
        path.resolve(__dirname, '..', 'migrations', '**/*.{ts,js}'),
      ],
    logging:true,
    synchronize: false,

})  

export {AppDataSource}














