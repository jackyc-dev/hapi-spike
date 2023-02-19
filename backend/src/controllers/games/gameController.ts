import Game from "./models/game";
import LibraryStatus from "./models/libraryStatus";
import { Request } from '@hapi/hapi';
import { iGame } from './models/game';

export interface IGamePayload extends iGame {
    libraryStatusId: number
}

const getAllGames = (): void | PromiseLike<Game[]> => Game.findAll({ include: LibraryStatus});
const getGameById = (id: number): PromiseLike<Game | null> => Game.findByPk(id, { include: LibraryStatus});
// const putGame = async (payload: IGamePayload): Promise<Game | null> => {
//     const newGame = await Game.create({ ...payload });
//     newGame.setLibraryStatus
//     await newGame.save();
//     return newGame;
// }

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
    }
};
