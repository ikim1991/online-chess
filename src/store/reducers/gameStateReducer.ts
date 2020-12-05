import { GameState, GameStateDispatch, INITIALIZE_GAMESTATE, GENERATE_SERVER_CODE, INITIALIZE_USERNAME, SHOW_AVAILABLE_GAMES, CHANGE_PLAYER_STATUS } from "../actions/gameStateTypes";

interface DefaultStateI{
    gameState: GameState,
    serverCode?: string,
    username?: string,
    gameList?: string[],
    ready: boolean
}

const defaultState: DefaultStateI = {
    gameState: 'HOME',
    ready: false
};

export default (state: DefaultStateI = defaultState, action: GameStateDispatch) => {
    switch(action.type){
        case INITIALIZE_GAMESTATE:
            return Object.assign({}, state, {...state, gameState: action.payload});
        case GENERATE_SERVER_CODE:
            return Object.assign({}, state, {...state, serverCode: action.payload});
        case INITIALIZE_USERNAME:
            return Object.assign({}, state, {...state, username: action.payload});
        case SHOW_AVAILABLE_GAMES:
            return Object.assign({}, state, {...state, gameList: action.payload});
        case CHANGE_PLAYER_STATUS:
            return Object.assign({}, state, {...state, ready: action.payload})
        default:
            return state;
    }
}