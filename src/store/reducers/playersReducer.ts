import { Player, PlayerDispatch, INITIALIZE_PLAYER } from "../actions/playerTypes";

interface DefaultStateI{
    player?: Player
}

const defaultState: DefaultStateI = { }

export default (state: DefaultStateI = defaultState, action: PlayerDispatch) => {
    switch(action.type){
        case INITIALIZE_PLAYER:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}