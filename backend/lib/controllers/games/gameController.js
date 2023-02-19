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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
const game_1 = __importDefault(require("./models/game"));
const libraryStatus_1 = __importDefault(require("./models/libraryStatus"));
const getAllGames = () => game_1.default.findAll({ include: libraryStatus_1.default });
const getGameById = (id) => game_1.default.findByPk(id, { include: libraryStatus_1.default });
// const putGame = async (payload: IGamePayload): Promise<Game | null> => {
//     const newGame = await Game.create({ ...payload });
//     newGame.setLibraryStatus
//     await newGame.save();
//     return newGame;
// }
exports.gamesController = {
    getAllGames: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield getAllGames();
        }
        catch (err) {
            console.log('ERROR - gamesController.getAllGames:', err);
        }
    }),
    getGameById: (request) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = request.params.id || 0;
            return yield getGameById(id);
        }
        catch (err) {
            console.log('ERROR - gamesController.getGameById', err);
        }
    })
};
