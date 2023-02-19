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
    }, {
        method: "POST",
        path: "/game",
        handler: gamesController.createGame
    }, {
        method: "POST",
        path: "/game/{id}",
        handler: gamesController.updateGame
    }, {
        method: "DELETE",
        path: "/game/{id}",
        handler: gamesController.deleteGame
    }
];

export const libraryStatusRoutes: ServerRoute[] = [{
        method: "GET",
        path: "/librarystatus",
        handler: libraryStatusController.getAllLibraryStatuses
    }
];