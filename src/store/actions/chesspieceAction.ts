import { Dispatch } from "react";
import { ChessboardDispatch, RENDER_POSITIONS } from "./chessboardTypes";
import { INITIALIZE_CHESSPIECES, Chesspiece, ChesspieceDispatch } from "./chesspieceTypes";

export const initializeChesspieces = (chesspieces: Chesspiece[]) => (dispatch: Dispatch<ChesspieceDispatch | ChessboardDispatch>) => {
    dispatch({type: INITIALIZE_CHESSPIECES, payload: chesspieces})

    let positions: {[key:string]: string} = {}
        chesspieces.forEach((piece) => {
            positions[piece.id] = piece.position
        })
    dispatch({type: RENDER_POSITIONS, payload: positions})
}
