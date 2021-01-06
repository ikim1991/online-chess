import { Player, PlayerDispatch, INITIALIZE_PLAYER, PLAYER_DEFAULT, CHANGE_PLAYER_STATUS, ASSIGN_COLOR, NEXT_TURN } from "../actions/playerTypes";

interface DefaultStateI{
    player?: Player
}

const defaultState: DefaultStateI = { }

export default (state: DefaultStateI = defaultState, action: PlayerDispatch) => {
    switch(action.type){
        case INITIALIZE_PLAYER:
            return Object.assign({}, state, {player: action.payload});
        case CHANGE_PLAYER_STATUS:
            return Object.assign({}, state, { player:{
                username: state.player!.username,
                ready: !state.player!.ready
            }})
        case ASSIGN_COLOR:
            return Object.assign({}, state, {player: {...state.player, color: action.payload}})
        case NEXT_TURN:
            return Object.assign({}, state, {player: {...state.player, turn: action.payload}})
        case PLAYER_DEFAULT:
            return Object.assign({}, state, defaultState);
        default:
            return state;
    }
}