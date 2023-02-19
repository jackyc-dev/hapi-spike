import Game from "./models/game";
import LibraryStatus, { iLibraryStatus } from "./models/libraryStatus";
import { Request } from '@hapi/hapi';
import { iGame } from './models/game';

export interface IGamePayload extends iGame {
    libraryStatus: iLibraryStatus
}

const getAllGames = (): void | PromiseLike<Game[]> => Game.findAll({ include: LibraryStatus});
const getGameById = (id: number): PromiseLike<Game | null> => Game.findByPk(id, { include: LibraryStatus});
const createGame = (payload: IGamePayload): PromiseLike<Game | null> => {
    return Game.create({ 
        ...payload,
        libraryStatusId: payload.libraryStatus.id
    });
};
const updateGame = async (payload: IGamePayload): Promise<Game | undefined> => {
    const targetGame = await Game.findByPk(payload.id);
    return targetGame?.update({ 
        ...payload,
        libraryStatusId: payload.libraryStatus.id
    });
}
const deleteGame = async (id:number): Promise<void> => {
    const targetGame = await Game.findByPk(id);
    return await targetGame?.destroy({
        force: true
    });
}

export const gamesController = {
    getAllGames: async(): Promise<void | Game[]> => {
        try {
            return await getAllGames();
        } catch(err) {
            console.log('ERROR - gamesController.getAllGames:', err);
        }
    },
    getGameById: async(request: Request): Promise<void | Game | null> => {
        try {
            const id = request.params.id || 0;
            return await getGameById(id);
        } catch(err) {
            console.log('ERROR - gamesController.getGameById', err);
        }
    },
    createGame: async(request: Request): Promise<void | Game | null> => {
        try {
            const payload = request.payload as IGamePayload;
            return await createGame(payload);
        } catch(err) {
            console.log('ERROR - gamesController.createGame', err);
        }
    },
    updateGame: async(request: Request): Promise<void | Game | null> => {
        try {
            let payload = request.payload as IGamePayload;
            payload.id = request.params.id;
            return await updateGame(payload);
        } catch(err) {
            console.log('ERROR - gamesController.updateGame', err);
        }
    },
    deleteGame: async(request: Request): Promise<void> => {
        try {
            const id = request.params.id;
            return await deleteGame(id);
        } catch(err) {
            console.log('ERROR - gamesController.deleteGame', err);
        }
    }
};
