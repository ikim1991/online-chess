import { Chessboard, ChessboardDispatch, INITIALIZE_CHESSBOARD, RENDER_POSITIONS, Square } from "../actions/chessboardTypes";

interface DefaultStateI{
    chessboard: Chessboard;
    squares?: Square[],
    occupied?: {[key:string]: string}
}

const defaultState: DefaultStateI = {
    chessboard: {
        columns: [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4}, {'e': 5}, {'f': 6}, {'g': 7}, {'h': 8}],
        rows: [8, 7, 6, 5, 4, 3, 2, 1]
    }
}

export default (state: DefaultStateI = defaultState, action: ChessboardDispatch): DefaultStateI => {
    switch(action.type){
        case INITIALIZE_CHESSBOARD:
            return Object.assign({}, state, {...state, squares: action.payload})
        case RENDER_POSITIONS:
                return Object.assign({}, state, {...state, occupied: action.payload})
        default:
            return state;
    }
}