import { INITIALIZE_CHESSBOARD, INITIALIZE_POSITIONS } from './chessboardTypes';
import { Square } from './chessboardTypes';

export const initializeChessboard = (squares: Square[]) => ({type: INITIALIZE_CHESSBOARD, payload: squares})
export const initializePositions = (positions: {[key:string]: string}) => ({type: INITIALIZE_POSITIONS, payload: positions})