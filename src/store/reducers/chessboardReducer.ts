import { Chessboard, ChessboardDispatch, DEFAULT_CHESSBOARD, INITIALIZE_CHESSBOARD, RENDER_CHECKMATE, RENDER_POSITIONS, Square } from "../actions/chessboardTypes";

interface DefaultStateI{
    chessboard: Chessboard;
    squares?: Square[];
    occupied?: {[key:string]: string};
    checkmate?: boolean;
}

const defaultState: DefaultStateI = {
    chessboard: {
        columns: [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4}, {'e': 5}, {'f': 6}, {'g': 7}, {'h': 8}],
        rows: [8, 7, 6, 5, 4, 3, 2, 1]
    },
    checkmate: false
}

export default (state: DefaultStateI = defaultState, action: ChessboardDispatch): DefaultStateI => {
    switch(action.type){
        case INITIALIZE_CHESSBOARD:
            return Object.assign({}, state, {...state, squares: action.payload})
        case RENDER_POSITIONS:
            return Object.assign({}, state, {...state, occupied: action.payload})
        case RENDER_CHECKMATE:
            return Object.assign({}, state, {...state, checkmate: true})
        case DEFAULT_CHESSBOARD:
            return Object.assign({}, state, defaultState);
        default:
            return state;
    }
}