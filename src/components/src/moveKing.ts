import { Square } from "../../store/actions/chessboardTypes";
import { Chesspiece } from "../../store/actions/chesspieceTypes";

export default (piece: Chesspiece, square: Square, occupied: [string, string][]) => {

    const occupiedSquares = occupied.map(p => p[1]);
    const occupiedWhite = occupied.filter(piece => piece[0][0] === 'w').map(p => p[1]);
    const occupiedBlack = occupied.filter(piece => piece[0][0] === 'b').map(p => p[1]);

    let move = [square.coord[0] - piece.coord[0], square.coord[1] - piece.coord[1]]

    let hypot = Math.hypot(move[0], move[1])

    if(hypot <= Math.hypot(1, 1) && hypot > 0){
        if(piece.color === "WHITE"){
            if(occupiedWhite.includes(square.position)){
                return false;
            } else{
                return true;
            }
        } else{
            if(occupiedBlack.includes(square.position)){
                return false;
            } else{
                return true;
            }
        }
    } else{
        return false;
    }
}