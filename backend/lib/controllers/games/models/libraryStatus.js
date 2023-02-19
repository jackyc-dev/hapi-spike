"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysqlDbHelper_1 = require("../../../utils/db/mysqlDbHelper");
class LibraryStatus extends sequelize_1.Model {
}
LibraryStatus.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    statusName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: (0, mysqlDbHelper_1.initDBConnection)(),
    tableName: 'libraryStatuses',
    updatedAt: false,
    createdAt: false
});
exports.default = LibraryStatus;
