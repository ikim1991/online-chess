import { Square } from "../../store/actions/chessboardTypes";
import { Chesspiece } from "../../store/actions/chesspieceTypes";

export default (piece: Chesspiece, square: Square, occupied: [string, string][]) => {

    const occupiedWhite = occupied.filter(piece => piece[0][0] === 'w').map(p => p[1]);
    const occupiedBlack = occupied.filter(piece => piece[0][0] === 'b').map(p => p[1]);

    // 8 possible movements
    // [1, 2][1, -2] [-1, -2][-1, 2][-2, 1][-2, -1][2, 1][2, -1]

    let move = [square.coord[0] - piece.coord[0], square.coord[1] - piece.coord[1]]

    if(
        (move[0] === 1 && move[1] === 2) || (move[0] === 1 && move[1] === -2) ||
        (move[0] === -1 && move[1] === 2) || (move[0] === -1 && move[1] === -2) ||
        (move[0] === 2 && move[1] === 1) || (move[0] === -2 && move[1] === 1) ||
        (move[0] === -2 && move[1] === -1) || (move[0] === 2 && move[1] === -1)
    ){
        if(!occupied.map(p => p[1]).includes(square.position)){
            return true;
        } else{
            if(occupiedWhite.includes(square.position) && piece.color === "WHITE"){
                return false
            } else if(occupiedBlack.includes(square.position) && piece.color === "BLACK"){
                return false
            } else{
                return true
            }
        }
    } else{
        return false;
    }
}