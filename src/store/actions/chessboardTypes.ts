
export const INITIALIZE_CHESSBOARD = "INITIALIZE_CHESSBOARD";
export const RENDER_POSITIONS = "RENDER_POSITIONS";
export const RENDER_CHECKMATE = "RENDER_CHECKMATE";
export const DEFAULT_CHESSBOARD = "DEFAULT_CHESSBOARD";
export const DISCONNECTED = "DISCONNECTED";


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

interface RenderPositions{
    type: typeof RENDER_POSITIONS;
    payload: {[key:string]: string}
}

interface InitializeChessboard{
    type: typeof INITIALIZE_CHESSBOARD;
    payload: Square[]
}

interface RenderCheckmate{
    type: typeof RENDER_CHECKMATE;
    payload: boolean;
}

interface Disconnected{
    type: typeof DISCONNECTED;
    payload: boolean;
}

interface DefaultChessboard{
    type: typeof DEFAULT_CHESSBOARD;
}

export type ChessboardDispatch = RenderPositions | InitializeChessboard | RenderCheckmate | Disconnected | DefaultChessboard;