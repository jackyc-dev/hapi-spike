"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysqlDbHelper_1 = require("../../../utils/db/mysqlDbHelper");
class Platform extends sequelize_1.Model {
}
Platform.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrementIdentity: true,
        autoIncrement: true
    },
    PlatformName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: (0, mysqlDbHelper_1.initDBConnection)(),
    tableName: 'Platforms',
    updatedAt: false,
    createdAt: false
});
exports.default = Platform;
