import { Color } from "./chesspieceTypes";

export const INITIALIZE_PLAYER = "INITIALIZE_PLAYER";
export const CHANGE_PLAYER_STATUS = "CHANGE_PLAYER_STATUS";
export const PLAYER_DEFAULT = "PLAYER_DEFAULT";
export const DETERMINE_COLOR = "DETERMINE_COLOR"

export type Player = {
    username: string;
    ready: boolean;
    color?: Color;
    turn?: false;
    check?: false;
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

interface DetermineColor{
    type: typeof DETERMINE_COLOR;
    payload: Color;
}

export type PlayerDispatch = InitializePlayer | ChangePlayerStatus | PlayerDefault | DetermineColor;