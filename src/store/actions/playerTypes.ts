import { Color } from "./chesspieceTypes";

export const INITIALIZE_PLAYER = "INITIALIZE_PLAYER";
export const CHANGE_PLAYER_STATUS = "CHANGE_PLAYER_STATUS";
export const PLAYER_DEFAULT = "PLAYER_DEFAULT";
export const ASSIGN_COLOR = "ASSIGN_COLOR";
export const NEXT_TURN = "NEXT_TURN";

export type Player = {
    username: string;
    ready: boolean;
    color?: Color;
    turn?: boolean;
    check?: boolean;
}

interface InitializePlayer{
    type: typeof INITIALIZE_PLAYER;
    payload: Player;
}

interface ChangePlayerStatus{
    type: typeof CHANGE_PLAYER_STATUS;
}

interface PlayerDefault{
    type: typeof PLAYER_DEFAULT;
}

interface AssignColor{
    type: typeof ASSIGN_COLOR;
    payload: Color;
}

interface NextTurn{
    type: typeof NEXT_TURN;
    payload: boolean;
}

export type PlayerDispatch = InitializePlayer | ChangePlayerStatus | PlayerDefault | AssignColor | NextTurn;