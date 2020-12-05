import { GameState, INITIALIZE_GAMESTATE, GENERATE_SERVER_CODE, INITIALIZE_USERNAME, SHOW_AVAILABLE_GAMES, CHANGE_PLAYER_STATUS } from './gameStateTypes';

export const initializeGameState = (gamestate: GameState) => ({ type: INITIALIZE_GAMESTATE, payload: gamestate});
export const generateServerCode = (serverCode: string) => ({ type: GENERATE_SERVER_CODE, payload: serverCode});
export const initializeUsername = (username: string) => ({ type: INITIALIZE_USERNAME, payload: username});
export const showGames = (games: string[]) => ({ type: SHOW_AVAILABLE_GAMES, payload: games});
export const changePlayerStatus = (ready: boolean) => ({ type: CHANGE_PLAYER_STATUS, payload: ready});