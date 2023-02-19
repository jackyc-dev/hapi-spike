import LibraryStatus from "./models/libraryStatus";

const getAllLibraryStatuses = (): void | PromiseLike<LibraryStatus[]> => LibraryStatus.findAll();

export const libraryStatusController = {
    getAllLibraryStatuses: async (): Promise<void | LibraryStatus[]> => {
        try {
            return await getAllLibraryStatuses();
        } catch(err) {
            console.log('ERROR - libraryStatusController.getAllLibraryStatuses:', err);
        }
    }
}
