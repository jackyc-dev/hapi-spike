import { ServerRoute } from '@hapi/hapi';
import { getAllLibraryStatuses } from './getAllLibraryStatuses';
import LibraryStatus from './models/libraryStatus';

export const gamesController = {
    
};

const libraryStatusController = {
    getAllLibraryStatuses: async (): Promise<void | LibraryStatus[]> => {
        try {
            return await getAllLibraryStatuses();
        } catch(err) {
            console.log('ERROR - libraryStatusController.getAllLibraryStatuses:', err);
        }
        
    }
}

export const libraryStatusRoutes: ServerRoute[] = [{
        method: "GET",
        path: "/librarystatus",
        handler: libraryStatusController.getAllLibraryStatuses
    }
];