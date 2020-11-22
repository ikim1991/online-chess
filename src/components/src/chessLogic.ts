import { Square } from "../../store/actions/chessboardTypes";
import { Chesspiece } from "../../store/actions/chesspieceTypes";
import moveBishop from "./moveBishop";
import moveKnight from "./moveKnight";
import movePawn from './movePawn';
import moveRook from './moveRook';

export const mapCoordinates = (coordinates: number[]) => {
    const mapObject:{[key:number]:string} = {1:'a', 2:'b', 3:'c', 4:'d', 5:'e', 6:'f', 7:'g', 8:'h'}

    return `${mapObject[coordinates[0]]}${coordinates[1]}`
}

export const mapPosition = (position: string) => {
    const mapObject:{[key:string]:number} = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8}

    return [mapObject[position[0]], parseInt(position[1])]
}

export const cartesianDistance = (coords: number[], x: number, y:number) => {
    if(
        (coords[0] + x > 8 || coords[0] - x < 0) ||
        (coords[1] + y > 8 || coords[1] - y < 0)
    ){
        return [-1, -1];
    }

    return [coords[0] + x, coords[1] + y]
}

export const allowedSquares = (piece: Chesspiece, square: Square, occupied: [string, string][]) => {
    switch(piece.rank){
        case "PAWN":
            return movePawn(piece, square, occupied);
        case "ROOK":
            return moveRook(piece, square, occupied);
        case "KNIGHT":
            return moveKnight(piece, square, occupied);
        case "BISHOP":
            return moveBishop(piece, square, occupied);
        case "QUEEN":
            return (moveRook(piece, square, occupied) || moveBishop(piece, square, occupied));
        case "KING":
            return false;
        default:
            return false;
    }
}