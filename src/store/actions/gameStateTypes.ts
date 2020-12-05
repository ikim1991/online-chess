export const INITIALIZE_GAMESTATE = 'INITIALIZE_GAMESTATE';
export const GENERATE_SERVER_CODE = 'GENERATE_SERVER_CODE';
export const INITIALIZE_USERNAME = 'INITIALIZE_USERNAME';
export const SHOW_AVAILABLE_GAMES = 'SHOW_AVAILABLE_GAMES'
export const CHANGE_PLAYER_STATUS = 'CHANGE_PLAYER_STATUS';

export type GameState = 'HOME' | 'JOIN' |'QUEUE' | 'READY' | 'PLAY';

export interface InitializeGameState{
    type: typeof INITIALIZE_GAMESTATE,
    payload: GameState
}

export interface GenerateServerCode{
    type: typeof GENERATE_SERVER_CODE;
    payload: string;
}

export interface InitializeUsername{
    type: typeof INITIALIZE_USERNAME;
    payload: string;
}

export interface ShowAvailableGames{
    type: typeof SHOW_AVAILABLE_GAMES;
    payload: string[];
}

export interface ChangePlayerStatus{
    type: typeof CHANGE_PLAYER_STATUS;
    payload: boolean;
}

export type GameStateDispatch = InitializeGameState | GenerateServerCode | InitializeUsername | ShowAvailableGames | ChangePlayerStatus;