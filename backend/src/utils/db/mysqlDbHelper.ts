import { Sequelize } from "sequelize";
import { getDBConfig } from "./getDBConfig";

export function initDBConnection():Sequelize  {
    const config = getDBConfig();
    const { dbName, dbUser, dbPW, host, port } = config;
    const connectionObj = new Sequelize(dbName, dbUser, dbPW, { 
        host,
        port, 
        dialect: 'mysql'
    });
    // console.log('initDBConnection: ', connectionObj);
    return connectionObj;
}

type authenticateThenFnType = (value:void) => void | PromiseLike<void>
type authenticateCatchFnType = (reason:any) => void | PromiseLike<void>

export function authenticate (
    connectionObj: Sequelize,
    thenFn: authenticateThenFnType,
    catchFn: authenticateCatchFnType): Promise<void> {
        return connectionObj
            .authenticate()
            .then(thenFn)
            .catch(catchFn);
};

// export default { init, authenticate };