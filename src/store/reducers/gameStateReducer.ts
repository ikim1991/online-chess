import { GameState, GameStateDispatch, INITIALIZE_GAMESTATE } from "../actions/gameStateTypes";

interface DefaultStateI{
    gameState: GameState
}

const defaultState: DefaultStateI = {
    gameState: 'PLAY'
};

export default (state: DefaultStateI = defaultState, action: GameStateDispatch) => {
    switch(action.type){
        case INITIALIZE_GAMESTATE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}