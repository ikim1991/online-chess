import { Color } from './chesspieceTypes';
import { CHANGE_PLAYER_STATUS, ASSIGN_COLOR, INITIALIZE_PLAYER, Player, PLAYER_DEFAULT, NEXT_TURN } from './playerTypes';

export const initializePlayer = (player: Player) => ({type: INITIALIZE_PLAYER, payload: player});
export const changePlayerStatus = () => ({type: CHANGE_PLAYER_STATUS});
export const assignColor = (color: Color) => ({type: ASSIGN_COLOR, payload: color})
export const nextTurn = (turn: boolean) => ({type: NEXT_TURN, payload: turn})
export const toPlayerDefault = () => ({type: PLAYER_DEFAULT});