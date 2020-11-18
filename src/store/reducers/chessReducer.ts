import { WHITE, BLACK, KING, QUEEN, BISHOP, KNIGHT, ROOK, PAWN } from '../types';

const initialGameState = {
    columns: [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4}, {'e': 5}, {'f': 6}, {'g': 7}, {'h': 8}],
    rows: [8, 7, 6, 5, 4, 3, 2, 1],
    initialPieces: [
        {color: WHITE, rank: KING, position: ['e1'], coords: [[5,1]], _id: ['wk']},
        {color: BLACK,rank: KING, position:['e8'], coords: [[5,8]], _id: ['bk']},
        {color:WHITE, rank: QUEEN,position:['d1'], coords: [[4,1]], _id: ['wq']},
        {color: BLACK, rank: QUEEN, position:['d8'], coords: [[4,8]], _id: ['bq']},
        {color: WHITE, rank: BISHOP, position:['c1','f1'], coords: [[3,1],[6,1]], _id: ['wb1', 'wb2']},
        {color: BLACK, rank: BISHOP, position:['c8','f8'], coords: [[6,8],[3,8]], _id: ['bb1', 'bb2']},
        {color:WHITE, rank: KNIGHT, position:['b1','g1'], coords:[[2,1],[6,1]], _id: ['wk1', 'wk2']},
        {color: BLACK,rank: KNIGHT,position:['b8','g8'], coords:[[2,8],[7,8]], _id: ['bk1', 'bk2']},
        {color:WHITE,rank: ROOK,position:['a1','h1'], coords:[[1,1],[8,1]], _id: ['wr1', 'wr2']},
        {color: BLACK,rank: ROOK,position:['a8','h8'], coords:[[1,8],[8,8]], _id: ['br1', 'br2']},
        {
            color:WHITE,
            rank: PAWN,
            position:['a2','b2','c2','d2','e2','f2','g2','h2'],
            coords:[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2]],
            _id: ['wp1', 'wp2', 'wp3', 'wp4', 'wp5', 'wp6', 'wp7', 'wp8']
        },
        {
            color: BLACK,
            rank: PAWN,
            position:['a7','b7','c7','d7','e7','f7','g7','h7'],
            coords:[[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7]],
            _id: ['bp1', 'bp2', 'bp3', 'bp4', 'bp5', 'bp6', 'bp7', 'bp8']
        }
    ],
    chesspieces: {}
}

export default (state = initialGameState, action: any={}) => {
    switch(action.type){
        default:
            return state;
    }
}