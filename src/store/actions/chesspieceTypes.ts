export const INITIALIZE_CHESSPIECES = "INITIALIZE_CHESSPIECES"

export type Color = 'WHITE' | 'BLACK';
export type Rank = 'PAWN' | 'ROOK' | 'KNIGHT' | 'BISHOP' | 'QUEEN' | 'KING'

export type Chesspiece = {
    id: string;
    rank: string;
    color: Color;
    position: string;
    coord: number[];
    hasBeenMoved: boolean;
    inPlay: boolean;
}

interface InitializeChesspieces{
    type: typeof INITIALIZE_CHESSPIECES,
    payload: Chesspiece[]
}

export type ChesspieceDispatch = InitializeChesspieces;