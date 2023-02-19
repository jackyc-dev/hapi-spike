"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryStatusRoutes = exports.gamesRoutes = void 0;
const gameController_1 = require("./gameController");
const libraryStatusController_1 = require("./libraryStatusController");
exports.gamesRoutes = [{
        method: "GET",
        path: "/game",
        handler: gameController_1.gamesController.getAllGames
    }, {
        method: "GET",
        path: "/game/id",
        handler: gameController_1.gamesController.getGameById
    }
];
exports.libraryStatusRoutes = [{
        method: "GET",
        path: "/librarystatus",
        handler: libraryStatusController_1.libraryStatusController.getAllLibraryStatuses
    }
];
