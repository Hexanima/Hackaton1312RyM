import { Character } from "./character"

export interface CharacterList {
    info: {
        count: number
        pages: number
        next: string | null // url "https://rickandmortyapi.com/api/character/?page=2"
        prev: string | null // url "https://rickandmortyapi.com/api/character/?page=2"
    }
    results: Character[]
}