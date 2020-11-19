import { INITIALIZE_CHESSPIECES, Chesspiece, MOVE_CHESSPIECE } from "./chesspieceTypes";

export const initializeChesspieces = (pieces: Chesspiece[]) => ({type: INITIALIZE_CHESSPIECES, payload: pieces});
export const moveChessPiece = (id: string, position: string) => ({type: MOVE_CHESSPIECE, payload: [id, position]});