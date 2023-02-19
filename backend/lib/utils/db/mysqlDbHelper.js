"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.initDBConnection = void 0;
const sequelize_1 = require("sequelize");
const getDBConfig_1 = require("./getDBConfig");
function initDBConnection() {
    const config = (0, getDBConfig_1.getDBConfig)();
    const { dbName, dbUser, dbPW, host, port } = config;
    const connectionObj = new sequelize_1.Sequelize(dbName, dbUser, dbPW, {
        host,
        port,
        dialect: 'mysql'
    });
    // console.log('initDBConnection: ', connectionObj);
    return connectionObj;
}
exports.initDBConnection = initDBConnection;
function authenticate(connectionObj, thenFn, catchFn) {
    return connectionObj
        .authenticate()
        .then(thenFn)
        .catch(catchFn);
}
exports.authenticate = authenticate;
;
// export default { init, authenticate };
