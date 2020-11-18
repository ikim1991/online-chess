export const INITIALIZE_CHESSPIECES = "INITIALIZE_CHESSPIECES"

export type Color = 'WHITE' | 'BLACK';
export type Rank = 'PAWN' | 'ROOK' | 'KNIGHT' | 'BISHOP' | 'QUEEN' | 'KING'

export type Chesspiece = {
    _id: string;
    rank: string;
    color: Color;
    position: string;
    coord: [number, number];
    hasBeenMoved: boolean;
}

interface InitializeChesspieces{
    type: typeof INITIALIZE_CHESSPIECES,
    payload: Chesspiece[]
}

export type ChesspieceDispatch = InitializeChesspieces