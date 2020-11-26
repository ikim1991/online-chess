export const INITIALIZE_GAMESTATE = 'INITIALIZE_GAMESTATE';

export type GameState = 'QUEUE' | 'READY' | 'INITIALIZE' | 'START' | 'PLAY' | 'GAMEOVER';

export interface InitializeGameState{
    type: typeof INITIALIZE_GAMESTATE,
    payload: GameState
}

export type GameStateDispatch = InitializeGameState;