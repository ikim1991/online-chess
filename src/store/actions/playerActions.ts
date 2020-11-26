import { INITIALIZE_PLAYER, Player } from './playerTypes';

export const initializePlayer = (player: Player) => ({type: INITIALIZE_PLAYER, payload: player});