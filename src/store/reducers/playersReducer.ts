import { Player, PlayerDispatch, INITIALIZE_PLAYER, PLAYER_DEFAULT, CHANGE_PLAYER_STATUS } from "../actions/playerTypes";

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
        case PLAYER_DEFAULT:
            return Object.assign({}, state, defaultState)
        default:
            return state;
    }
}