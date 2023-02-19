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
const createGame = (payload) => {
    return game_1.default.create(Object.assign(Object.assign({}, payload), { libraryStatusId: payload.libraryStatus.id }));
};
const updateGame = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const targetGame = yield game_1.default.findByPk(payload.id);
    return targetGame === null || targetGame === void 0 ? void 0 : targetGame.update(Object.assign(Object.assign({}, payload), { libraryStatusId: payload.libraryStatus.id }));
});
const deleteGame = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const targetGame = yield game_1.default.findByPk(id);
    return yield (targetGame === null || targetGame === void 0 ? void 0 : targetGame.destroy({
        force: true
    }));
});
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
    }),
    createGame: (request) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const payload = request.payload;
            return yield createGame(payload);
        }
        catch (err) {
            console.log('ERROR - gamesController.createGame', err);
        }
    }),
    updateGame: (request) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let payload = request.payload;
            payload.id = request.params.id;
            return yield updateGame(payload);
        }
        catch (err) {
            console.log('ERROR - gamesController.updateGame', err);
        }
    }),
    deleteGame: (request) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = request.params.id;
            return yield deleteGame(id);
        }
        catch (err) {
            console.log('ERROR - gamesController.deleteGame', err);
        }
    })
};
