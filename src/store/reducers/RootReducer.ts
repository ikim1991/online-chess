import { combineReducers } from 'redux';
import chessboardReducer from './chessboardReducer';
import chesspieceReducer from './chesspiece.reducer';

const RootReducer = combineReducers({
    chessboard: chessboardReducer,
    chesspiece: chesspieceReducer
});

export default RootReducer;
