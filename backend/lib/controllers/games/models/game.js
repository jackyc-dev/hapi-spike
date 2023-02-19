"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysqlDbHelper_1 = require("../../../utils/db/mysqlDbHelper");
const libraryStatus_1 = __importDefault(require("./libraryStatus"));
class Game extends sequelize_1.Model {
}
Game.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    rating: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    }
}, {
    sequelize: (0, mysqlDbHelper_1.initDBConnection)(),
    tableName: 'games',
    updatedAt: false,
    createdAt: false
});
libraryStatus_1.default.hasOne(Game);
Game.belongsTo(libraryStatus_1.default);
exports.default = Game;
