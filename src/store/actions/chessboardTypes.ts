
export const INITIALIZE_CHESSBOARD = "INITIALIZE_CHESSBOARD";

export type Square = {
    position: string;
    column: {[key: string]: number};
    row: number;
    value: number;
    coord: number[];
}

export type Chessboard = {
    rows: number[],
    columns: {[key: string]: number}[];
    squares?: Square[]
}

export interface InitializeChessboard{
    type: typeof INITIALIZE_CHESSBOARD,
    payload: Square[]
}