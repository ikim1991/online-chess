import { DISCONNECTED, INITIALIZE_CHESSBOARD, RENDER_CHECKMATE, RENDER_POSITIONS } from './chessboardTypes';
import { Square } from './chessboardTypes';

export const initializeChessboard = (squares: Square[]) => ({type: INITIALIZE_CHESSBOARD, payload: squares})
export const renderPositions = (positions: {[key:string]: string}) => ({type: RENDER_POSITIONS, payload: positions})
export const renderCheckmate = (checkmate: boolean) => ({type: RENDER_CHECKMATE, payload: checkmate})
export const disconnect = (disconnected: boolean) => ({type: DISCONNECTED, payload: disconnected})