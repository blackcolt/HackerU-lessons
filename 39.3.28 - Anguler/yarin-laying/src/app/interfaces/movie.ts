import { Actor } from "./actor";

export interface Movie {
    category: string,
    actors: Actor[],
    isNew: boolean,
    name: string,
    date: Date,
}
