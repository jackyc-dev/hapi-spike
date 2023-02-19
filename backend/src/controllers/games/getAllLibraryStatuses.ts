import LibraryStatus from "./models/libraryStatus";

export const getAllLibraryStatuses = (): void | PromiseLike<LibraryStatus[]> => {
    try {
        return LibraryStatus.findAll();
    }
    catch(err) {
        console.log('ERROR - getAllLibraryStatuses: ', err);
    }
}