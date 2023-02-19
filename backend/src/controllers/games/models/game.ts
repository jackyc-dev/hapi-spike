import { iLibraryStatus } from "./libraryStatus";

export type game = {
    id: number;
    title: string;
    // platforms: [];
    releaseDate: Date;
    libraryStatus: iLibraryStatus;
    ratings: number;
    // tags:[];
}