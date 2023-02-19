import { initDBConnection, authenticate, mysqlDBConfig } from '../../utils/dbUtils';

export const healthCheck = async (): Promise<string> => {
    const connectionObj = initDBConnection();
    
    try {
        await connectionObj.authenticate();
        console.log('healthCheck: Authenticate success');
        return 'healthCheck: Authenticate success';
    } 
    catch(err) {
        console.log('healthCheck: error', err)
        return `healthCheck: error ${err}`;
    }
    return 'healthCheck: end';
};