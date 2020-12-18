import { Color } from "./chesspieceTypes";

export const GET_PENDING = 'GET_PENDING';
export const GET_ERROR = 'GET_ERROR';
export const CREATE_GAME = 'CREATE_GAME';
export const SHOW_GAMELIST = 'SHOW_GAMELIST';
export const JOIN_GAME = 'JOIN_GAME';
export const START_GAME = 'START_GAME';
export const TO_DEFAULT = 'TO_DEFAULT';
export const CHANGE_GAME_STATE = "CHANGE_GAME_STATE";

export type GameState = 'HOME' | 'JOIN' |'QUEUE' | 'READY' | 'PLAY';

interface GetPending{
    type: typeof GET_PENDING
}
interface GetError{
    type: typeof GET_ERROR,
    payload: string
}
interface CreateGame{
    type: typeof CREATE_GAME,
    payload: {
        identifier: string,
        host?: {
            username: string,
            ready: boolean,
            color?: Color
        },
        joiner?: {
            username: string,
            ready: boolean,
            color?: Color
        },
        gameState: GameState
    }
}
interface ShowGameList{
    type: typeof SHOW_GAMELIST,
    payload: {
        gameList: string[],
        gameState: GameState
    }
}
interface ToDefault{
    type: typeof TO_DEFAULT
}
interface JoinGame{
    type: typeof JOIN_GAME,
    payload: {
        identifier: string,
        host?: {
            username: string,
            ready: string,
            color?: Color
        },
        joiner?: {
            username: string,
            ready: string,
            color?: Color
        },
        gameState: GameState
    }
}
interface StartGame{
    type: typeof START_GAME,
    payload: {
        identifier: string,
        host: {
            username: string,
            ready: boolean,
            color?: Color
        },
        joiner: {
            username: string,
            ready: boolean,
            color?: Color
        },
        gameState: GameState
    }
}

interface ChangeGameState{
    type: typeof CHANGE_GAME_STATE,
    payload: GameState
}

export type GameStateDispatch = GetPending | GetError | CreateGame | ShowGameList | ToDefault | JoinGame | StartGame | ChangeGameState;
