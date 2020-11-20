import { Square } from "../../store/actions/chessboardTypes";
import { Chesspiece } from "../../store/actions/chesspieceTypes";
import { mapCoordinates, cartesianDistance } from './chessLogic';

export default (piece: Chesspiece, square: Square, occupied: [string, string][]) => {
    let allowed: (string | null)[] = []
    let cartesian: number[] = []
    const occupiedWhite = occupied.filter(piece => piece[0][0] === 'w');
    const occupiedBlack = occupied.filter(piece => piece[0][0] === 'b');
    if(piece.color === 'WHITE'){
        // Can move 2 spaces if first move
        if(!piece.hasBeenMoved){
            cartesian = cartesianDistance(piece.coord, 0, 2)
            if(cartesian[0] > 0){
                allowed.push(mapCoordinates(cartesian))
            }
        }

        // Otherwise move 1 space
        cartesian = cartesianDistance(piece.coord, 0, 1)
        if(cartesian[0] > 0){
            allowed.push(mapCoordinates(cartesian))
        }
        
        // Check for diagonals
        let diagonals = [[1,1], [-1,1]];
        diagonals.forEach(i => {
            let pos = mapCoordinates([piece.coord[0] + i[0], piece.coord[1] + i[1]])
            if(occupiedBlack.filter((item) => item[1] === pos).length > 0){
                allowed.push(pos)
            }
        })
        return allowed;
    } else{
        // Can move 2 spaces if first move
        if(!piece.hasBeenMoved){
            cartesian = cartesianDistance(piece.coord, 0, -2)
            if(cartesian[0] > 0){
                allowed.push(mapCoordinates(cartesian))
            }
        }

        // Otherwise move 1 space
        cartesian = cartesianDistance(piece.coord, 0, -1)
        if(cartesian[0] > 0){
            allowed.push(mapCoordinates(cartesian))
        }
        
        // Check for diagonals
        let diagonals = [[-1,-1], [1,-1]];
        diagonals.forEach(i => {
            let pos = mapCoordinates([piece.coord[0] + i[0], piece.coord[1] + i[1]])
            if(occupiedWhite.filter((item) => item[1] === pos).length > 0){
                allowed.push(pos)
            }
        })
        return allowed;
    }
}