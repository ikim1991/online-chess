import { combineReducers } from 'redux';
import chessboardReducer from './chessboardReducer';
import chesspieceReducer from './chesspieceReducer';
import gameStateReducer from './gameStateReducer';
import playersReducer from './playersReducer';

const RootReducer = combineReducers({
    chessboard: chessboardReducer,
    chesspiece: chesspieceReducer,
    player: playersReducer,
    game: gameStateReducer
});

export default RootReducer;
