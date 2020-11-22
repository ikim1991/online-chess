import { Square } from "../../store/actions/chessboardTypes";
import { Chesspiece } from "../../store/actions/chesspieceTypes";
import { mapCoordinates, cartesianDistance } from './chessLogic';

export default (piece: Chesspiece, square: Square, occupied: [string, string][]) => {

    const occupiedSquares = occupied.map(p => p[1]);
    const occupiedWhite = occupied.filter(piece => piece[0][0] === 'w').map(p => p[1]);
    const occupiedBlack = occupied.filter(piece => piece[0][0] === 'b').map(p => p[1]);

    let move = [square.coord[0] - piece.coord[0], square.coord[1] - piece.coord[1]]
    let magnitude = Math.abs(move[1])
    let direction = move[1] / Math.abs(move[1])

    if(move[0] > magnitude){
        return false;
    }

    if(piece.color === "WHITE"){
        let upOne = mapCoordinates([piece.coord[0], piece.coord[1] + 1])
        let upTwo = mapCoordinates([piece.coord[0], piece.coord[1] + 2])
        let diagonalRight = mapCoordinates([piece.coord[0] + 1, piece.coord[1] + 1])
        let diagonalLeft = mapCoordinates([piece.coord[0] - 1, piece.coord[1] + 1])
        if(!occupiedSquares.includes(upOne) && square.position === upOne){
            return true;
        } else if(
            (!occupiedSquares.includes(upOne) && !occupiedSquares.includes(upTwo)) && 
            (square.position === upTwo && !piece.hasBeenMoved)
            ){
            return true;
        } else if(diagonalRight === square.position && occupiedBlack.includes(square.position)){
            return true
        } else if(diagonalLeft === square.position && occupiedBlack.includes(square.position)){
            return true;
        } else{
            return false;
        }
    } else{
        let upOne = mapCoordinates([piece.coord[0], piece.coord[1] - 1])
        let upTwo = mapCoordinates([piece.coord[0], piece.coord[1] - 2])
        let diagonalRight = mapCoordinates([piece.coord[0] + 1, piece.coord[1] - 1])
        let diagonalLeft = mapCoordinates([piece.coord[0] - 1, piece.coord[1] - 1])
        if(!occupiedSquares.includes(upOne) && square.position === upOne){
            return true;
        } else if(
            (!occupiedSquares.includes(upOne) && !occupiedSquares.includes(upTwo)) && 
            (square.position === upTwo && !piece.hasBeenMoved)
            ){
            return true;
        } else if(diagonalRight === square.position && occupiedWhite.includes(square.position)){
            return true
        } else if(diagonalLeft === square.position && occupiedWhite.includes(square.position)){
            return true;
        } else{
            return false;
        }
    }
}