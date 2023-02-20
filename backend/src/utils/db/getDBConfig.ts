import { mysqlDBConfig } from './dbConfig';

export function getDBConfig(): mysqlDBConfig {
    return {
        dbName: (process.env["DB_NAME"] as string),
        dbUser: (process.env["DB_USER"] as string),
        dbPW: (process.env["DB_PASSWORD"] as string),
        host: (process.env["DB_HOST"] as string),
        port: Number(process.env["DB_NAME"] as string)
    }
    // return {
    //     dbName: "hapi_sql",
    //     dbUser: "root",
    //     dbPW: "123456",
    //     host: "localhost",
    //     port: 3307
    // }
}