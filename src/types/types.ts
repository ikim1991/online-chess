import Bishop from "../components/chess/pieces/Bishop";
import King from "../components/chess/pieces/King";
import Knight from "../components/chess/pieces/Knight";
import Pawn from "../components/chess/pieces/Pawn";
import Queen from "../components/chess/pieces/Queen";
import Rook from "../components/chess/pieces/Rook";

export const WHITE = 'WHITE';
export const BLACK = 'BLACK';

export type COLOR = typeof WHITE | typeof BLACK;

export const KING = 'KING';
export const QUEEN = 'QUEEN';
export const BISHOP = 'BISHOP';
export const KNIGHT = 'KNIGHT';
export const ROOK = 'ROOK';
export const PAWN = 'PAWN';

export type RANK = typeof KING | typeof QUEEN | typeof BISHOP | typeof KNIGHT | typeof ROOK | typeof PAWN;
export type PIECE = King | Queen | Bishop | Knight | Rook | Pawn;