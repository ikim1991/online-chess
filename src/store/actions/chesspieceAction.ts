import { INITIALIZE_CHESSPIECES, Chesspiece, MOVE_CHESSPIECE, UPDATE_CHESSPIECE } from "./chesspieceTypes";

export const initializeChesspieces = (pieces: Chesspiece[]) => ({type: INITIALIZE_CHESSPIECES, payload: pieces});
export const moveChessPiece = (id: string, position: string) => ({type: MOVE_CHESSPIECE, payload: [id, position]});
export const updateChessPiece = (piece: Chesspiece) => ({type: UPDATE_CHESSPIECE, payload: piece});