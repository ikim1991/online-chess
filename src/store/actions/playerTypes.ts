import { Color } from "./chesspieceTypes";

export const INITIALIZE_PLAYER = "INITIALIZE_PLAYER";

export type Player = {
    name: string;
    color: Color;
    server: string;
    turn: false;
    check: false;
}

interface InitializePlayer{
    type: typeof INITIALIZE_PLAYER;
    payload: Player;
}

export type PlayerDispatch = InitializePlayer