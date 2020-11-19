import { INITIALIZE_CHESSBOARD, RENDER_POSITIONS } from './chessboardTypes';
import { Square } from './chessboardTypes';

export const initializeChessboard = (squares: Square[]) => ({type: INITIALIZE_CHESSBOARD, payload: squares})
export const renderPositions = (positions: {[key:string]: string}) => ({type: RENDER_POSITIONS, payload: positions})