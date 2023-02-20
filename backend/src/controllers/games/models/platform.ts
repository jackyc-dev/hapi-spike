import { Model, DataTypes } from 'sequelize';
import { initDBConnection } from '../../../utils/db/mysqlDbHelper';

export interface iPlatform {
    id: number;
    PlatformName: string;
}

class Platform extends Model<iPlatform> { }

Platform.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrementIdentity: true,
        autoIncrement: true
    },
    PlatformName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: initDBConnection(),
    tableName: 'Platforms',
    updatedAt: false,
    createdAt: false
});

export default Platform;
