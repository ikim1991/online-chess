export const INITIALIZE_GAMESTATE = 'INITIALIZE_GAMESTATE';

export type GameState = 'HOME' |'QUEUE' | 'READY' | 'PLAY';

export interface InitializeGameState{
    type: typeof INITIALIZE_GAMESTATE,
    payload: GameState
}

export type GameStateDispatch = InitializeGameState;