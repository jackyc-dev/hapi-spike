import { Model, DataTypes } from 'sequelize';
import { initDBConnection } from '../../../utils/db/mysqlDbHelper';
import LibraryStatus from './libraryStatus';

export interface iGame {
    id: number;
    title: string;
    platforms: string[];
    releaseDate: Date;
    libraryStatusId: number;
    rating: number;
    tags: string[];
}

class Game extends Model<iGame> { }

Game.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrementIdentity: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    libraryStatusId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: 'libraryStatuses',
            key: 'id'
        },
    },
    rating: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    tags: {
        type: DataTypes.JSON,
        allowNull: true,
        get() {
            return this.getDataValue("tags") || [];
        },
        set(value:string[]) {
            return this.setDataValue("tags", value);
        }
    },
    platforms: {
        type: DataTypes.JSON,
        allowNull: true,
        get() {
            return this.getDataValue("platforms") || [];
        },
        set(value:string[]) {
            return this.setDataValue("platforms", value);
        }
    }
}, {
    sequelize: initDBConnection(),
    tableName: 'games',
    updatedAt: false,
    createdAt: false
})

LibraryStatus.hasOne(Game);
Game.belongsTo(LibraryStatus);

export default Game;