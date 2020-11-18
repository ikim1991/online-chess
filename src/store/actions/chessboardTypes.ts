export const INITIALIZE_CHESSBOARD = "INITIALIZE_CHESSBOARD";
export const INITIALIZE_POSITIONS = "INITIALIZE_POSITIONS"

export type Square = {
    position: string;
    column: {[key: string]: number};
    row: number;
    value: number;
    coord: number[];
}

export type Chessboard = {
    rows: number[];
    columns: {[key: string]: number}[];
    squares?: Square[];
}

interface InitializePositions{
    type: typeof INITIALIZE_POSITIONS;
    payload: {[key:string]: string}
}

interface InitializeChessboard{
    type: typeof INITIALIZE_CHESSBOARD;
    payload: Square[]
}

export type ChessboardDispatch = InitializePositions | InitializeChessboard