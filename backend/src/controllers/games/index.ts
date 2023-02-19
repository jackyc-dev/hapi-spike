import { ServerRoute } from '@hapi/hapi';
import { gamesController } from './gameController';
import { libraryStatusController } from './libraryStatusController';


export const gamesRoutes: ServerRoute[] = [{
        method: "GET",
        path: "/game",
        handler: gamesController.getAllGames
    }, {
        method: "GET",
        path: "/game/id",
        handler: gamesController.getGameById
    }
];

export const libraryStatusRoutes: ServerRoute[] = [{
        method: "GET",
        path: "/librarystatus",
        handler: libraryStatusController.getAllLibraryStatuses
    }
];