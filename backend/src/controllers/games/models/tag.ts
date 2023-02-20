import { Model, DataTypes } from 'sequelize';
import { initDBConnection } from '../../../utils/db/mysqlDbHelper';

export interface iTag {
    id: number;
    tagName: string;
}

class Tag extends Model<iTag> { }

Tag.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrementIdentity: true,
        autoIncrement: true
    },
    tagName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: initDBConnection(),
    tableName: 'tags',
    updatedAt: false,
    createdAt: false
});

export default Tag;