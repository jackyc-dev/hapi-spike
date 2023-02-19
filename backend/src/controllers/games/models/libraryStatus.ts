import { DataTypes, Model } from "sequelize";
import { initDBConnection } from '../../../utils/db/mysqlDbHelper';

export interface iLibraryStatus {
    id: number;
    statusName: string;
}

class LibraryStatus extends Model<iLibraryStatus> { }

LibraryStatus.init({
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true
    },
    statusName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: initDBConnection(),
    modelName: 'libraryStatuses',
    updatedAt: false,
    createdAt: false
});

export default LibraryStatus;