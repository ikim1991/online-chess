import { Results, Hand, RockPaperScissorsDispatch, PENDING_RESULTS, ROCK_PAPER_SCISSORS, SHOW_RESULTS, DEFAULT_RESULTS } from "../actions/RockPaperScissorsTypes";

interface DefaultStateI{
    pending: boolean,
    results: Results,
    hand?: Hand
}

const defaultState: DefaultStateI = {
    pending: false,
    results: "PENDING"
}

export default (state: DefaultStateI = defaultState, action: RockPaperScissorsDispatch) => {
    switch(action.type){
        case PENDING_RESULTS:
            return Object.assign({}, state, {...state, pending: true});
        case ROCK_PAPER_SCISSORS:
            return Object.assign({}, state, {...state, hand: action.payload});
        case SHOW_RESULTS:
            return Object.assign({}, state, {...state, results: action.payload, pending: false});
        case DEFAULT_RESULTS:
            return defaultState;
        default:
            return state
    }
}