"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryStatusRoutes = exports.gamesController = void 0;
const getAllLibraryStatuses_1 = require("./getAllLibraryStatuses");
exports.gamesController = {};
const libraryStatusController = {
    getAllLibraryStatuses: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield (0, getAllLibraryStatuses_1.getAllLibraryStatuses)();
        }
        catch (err) {
            console.log('ERROR - libraryStatusController.getAllLibraryStatuses:', err);
        }
    })
};
exports.libraryStatusRoutes = [{
        method: "GET",
        path: "/librarystatus",
        handler: libraryStatusController.getAllLibraryStatuses
    }
];
