import { combineReducers } from 'redux';
import chessboardReducer from './chessboardReducer';
import chesspieceReducer from './chesspieceReducer';
import gameStateReducer from './gameStateReducer';
import playersReducer from './playersReducer';
import RockPaperScissorsReducer from './RockPaperScissorsReducer';

const RootReducer = combineReducers({
    chessboard: chessboardReducer,
    chesspiece: chesspieceReducer,
    player: playersReducer,
    game: gameStateReducer,
    rockPaperScissors: RockPaperScissorsReducer
});

export default RootReducer;
