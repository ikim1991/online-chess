import { combineReducers } from 'redux';
import chessboardReducer from './chessboardReducer';

const RootReducer = combineReducers({
    chessboard: chessboardReducer
});

export default RootReducer;
