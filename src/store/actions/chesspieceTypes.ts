export const INITIALIZE_CHESSPIECES = "INITIALIZE_CHESSPIECES"
export const MOVE_CHESSPIECE = "MOVE_CHESSPIECE"

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

interface MoveChessPiece{
    type: typeof MOVE_CHESSPIECE,
    payload: [string, string]
}

export type ChesspieceDispatch = InitializeChesspieces | MoveChessPiece