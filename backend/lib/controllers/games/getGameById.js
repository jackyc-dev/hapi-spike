"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameById = void 0;
const game_1 = __importDefault(require("./models/game"));
const libraryStatus_1 = __importDefault(require("./models/libraryStatus"));
const getGameById = (id) => game_1.default.findByPk(id, { include: libraryStatus_1.default });
exports.getGameById = getGameById;
