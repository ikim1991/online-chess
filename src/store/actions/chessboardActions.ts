import { INITIALIZE_CHESSBOARD } from './chessboardTypes';
import { Square } from './chessboardTypes';

export const initializeChessboard = (squares: Square[]) => ({type: INITIALIZE_CHESSBOARD, payload: squares})