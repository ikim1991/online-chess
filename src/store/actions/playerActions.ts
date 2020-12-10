import { CHANGE_PLAYER_STATUS, INITIALIZE_PLAYER, Player, PLAYER_DEFAULT } from './playerTypes';

export const initializePlayer = (player: Player) => ({type: INITIALIZE_PLAYER, payload: player});
export const changePlayerStatus = () => ({type: CHANGE_PLAYER_STATUS});
export const toPlayerDefault = () => ({type: PLAYER_DEFAULT});