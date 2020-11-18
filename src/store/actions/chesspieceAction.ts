import { INITIALIZE_CHESSPIECES, Chesspiece } from "./chesspieceTypes";

export const initializeChesspieces = (pieces: Chesspiece[]) => ({type: INITIALIZE_CHESSPIECES, payload: pieces})
