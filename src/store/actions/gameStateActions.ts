import { GameState, INITIALIZE_GAMESTATE } from './gameStateTypes';

export const initializeGameState = (gamestate: GameState) => ({ type: INITIALIZE_GAMESTATE, payload: gamestate});