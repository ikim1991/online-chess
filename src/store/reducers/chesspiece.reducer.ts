import { mapPosition } from "../../components/src/chessLogic"
import { Chesspiece, Color, ChesspieceDispatch, INITIALIZE_CHESSPIECES, Rank, MOVE_CHESSPIECE  } from "../actions/chesspieceTypes"

export type Initializer = ({
    color: Color;
    rank: Rank;
    _ids: string[];
    position: string[];
    coords: [number, number][];
})[]

interface DefaultStateI{
    chesspieces?: Chesspiece[],
    positions?: string[]
    initializer: Initializer
}

const defaultState: DefaultStateI = {
    initializer: [
        {color: 'WHITE', rank: 'KING', position: ['e1'], coords: [[5,1]], _ids: ['wk']},
        {color: 'BLACK',rank: 'KING', position:['e8'], coords: [[5,8]], _ids: ['bk']},
        {color:'WHITE', rank: 'QUEEN',position:['d1'], coords: [[4,1]], _ids: ['wq']},
        {color: 'BLACK', rank: 'QUEEN', position:['d8'], coords: [[4,8]], _ids: ['bq']},
        {color: 'WHITE', rank: 'BISHOP', position:['c1','f1'], coords: [[3,1],[6,1]], _ids: ['wb1', 'wb2']},
        {color: 'BLACK', rank: 'BISHOP', position:['c8','f8'], coords: [[6,8],[3,8]], _ids: ['bb1', 'bb2']},
        {color:'WHITE', rank: 'KNIGHT', position:['b1','g1'], coords:[[2,1],[6,1]], _ids: ['wk1', 'wk2']},
        {color: 'BLACK',rank: 'KNIGHT',position:['b8','g8'], coords:[[2,8],[7,8]], _ids: ['bk1', 'bk2']},
        {color:'WHITE',rank: 'ROOK',position:['a1','h1'], coords:[[1,1],[8,1]], _ids: ['wr1', 'wr2']},
        {color: 'BLACK',rank: 'ROOK',position:['a8','h8'], coords:[[1,8],[8,8]], _ids: ['br1', 'br2']},
        {
            color:'WHITE',
            rank: 'PAWN',
            position:['a2','b2','c2','d2','e2','f2','g2','h2'],
            coords:[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2]],
            _ids: ['wp1', 'wp2', 'wp3', 'wp4', 'wp5', 'wp6', 'wp7', 'wp8']
        },
        {
            color: 'BLACK',
            rank: 'PAWN',
            position:['a7','b7','c7','d7','e7','f7','g7','h7'],
            coords:[[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7]],
            _ids: ['bp1', 'bp2', 'bp3', 'bp4', 'bp5', 'bp6', 'bp7', 'bp8']
        }
    ]
}

export default (state: DefaultStateI = defaultState, action: ChesspieceDispatch) => {
    switch(action.type){
        case INITIALIZE_CHESSPIECES:
            return Object.assign({}, state, {...state, chesspieces: action.payload})
        case MOVE_CHESSPIECE:
            return Object.assign({}, state, {...state, chesspieces: state.chesspieces!.map(piece=> {
                if(piece._id === action.payload[0]){
                    piece.position = action.payload[1]
                    piece.coord = mapPosition(action.payload[1])
                    return piece
                }else{
                    return piece
                }
            })})
        default:
            return state
    }
}