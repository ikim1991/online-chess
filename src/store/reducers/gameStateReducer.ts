import { Color } from "../actions/chesspieceTypes";
import { CHANGE_GAME_STATE, CREATE_GAME, GameState, GameStateDispatch, GET_ERROR, GET_PENDING, JOIN_GAME, SHOW_GAMELIST, START_GAME, TO_DEFAULT } from "../actions/gameStateTypes";

interface DefaultStateI{
    gameState: GameState,
    identifier?: string,
    gameList?: string[],
    pending: boolean,
    error?: string,
    host?: {
        username: string,
        ready: boolean,
        color: Color
    },
    joiner?:{
        username: string,
        ready: boolean,
        color: Color
    }
}

const defaultState: DefaultStateI = {
    gameState: 'HOME',
    pending: false
};

export default (state: DefaultStateI = defaultState, action: GameStateDispatch) => {
    switch(action.type){
        case GET_PENDING:
            return Object.assign({}, state, {...state, pending: true});
        case GET_ERROR:
            return Object.assign({}, state, {...state, pending: false, error: action.payload});
        case CREATE_GAME:
            return Object.assign({}, state, {...state, ...action.payload, pending: false});
        case JOIN_GAME:
            return Object.assign({}, state, {...state, ...action.payload, pending: false});
        case SHOW_GAMELIST:
            return Object.assign({}, state, {...state, pending: false, gameState: "JOIN", gameList: action.payload});
        case START_GAME:
            return Object.assign({}, state, {...state, ...action.payload});
        case TO_DEFAULT:
            return Object.assign({}, state, defaultState);
        case CHANGE_GAME_STATE:
            return Object.assign({}, state, {...state, gameState: action.payload})
        default:
            return state;
    }
}