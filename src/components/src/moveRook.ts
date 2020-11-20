import { Square } from "../../store/actions/chessboardTypes";
import { Chesspiece } from "../../store/actions/chesspieceTypes";
import { mapCoordinates, cartesianDistance } from './chessLogic';

export default (piece: Chesspiece, square: Square, occupied: [string, string][]) => {

    const calculateSquares = (to: number[], from: number[]) => {
        let newCoords = [(to[0] - from[0]), (to[1] - from[1])]

        return newCoords;
    }

    const occupiedWhite = occupied.filter(piece => piece[0][0] === 'w').map(p => p[1]);
    const occupiedBlack = occupied.filter(piece => piece[0][0] === 'b').map(p => p[1]);

    let numOfSquares = calculateSquares(square.coord, piece.coord)

    if(piece.coord[1] - square.coord[1] === 0){
        // -1 equals left, 1 equals right
        let direction = numOfSquares[0] / Math.abs(numOfSquares[0]);
        let magnitude = Math.abs(numOfSquares[0])

        for(let i = 0; i<magnitude; i++){
            let temp: string;
            if(direction === 1){
                temp = mapCoordinates([piece.coord[0] + (i+1), piece.coord[1]]);
            } else{
                temp = mapCoordinates([piece.coord[0] - (i+1), piece.coord[1]]);
            }
            
            if((occupiedWhite.includes(temp) || occupiedBlack.includes(temp)) && magnitude > i+1){
                return false;
            }
            if(piece.color === 'WHITE'){
                if(occupiedBlack.includes(temp) && magnitude === i+1){
                    return true;
                }
                if(occupiedWhite.includes(temp) && magnitude === i+1){
                    return false;
                }
            } else{
                if(occupiedBlack.includes(temp) && magnitude === i+1){
                    return false;
                }
                if(occupiedWhite.includes(temp) && magnitude === i+1){
                    return true;
                }
            }
            
            if(magnitude === i+1){
                return true;
            }
        }
    } else if(piece.coord[0] - square.coord[0] === 0){
        // -1 equals down, 1 equals up
        let direction = numOfSquares[1] / Math.abs(numOfSquares[1]);
        let magnitude = Math.abs(numOfSquares[1])

        for(let i = 0; i<magnitude; i++){
            let temp: string;
            if(direction === 1){
                temp = mapCoordinates([piece.coord[0], piece.coord[1] + (i+1)]);
            } else{
                temp = mapCoordinates([piece.coord[0], piece.coord[1] - (i+1)]);
            }
            
            if((occupiedWhite.includes(temp) || occupiedBlack.includes(temp)) && magnitude > i+1){
                return false;
            }
            if(piece.color === 'WHITE'){
                if(occupiedBlack.includes(temp) && magnitude === i+1){
                    return true;
                }
                if(occupiedWhite.includes(temp) && magnitude === i+1){
                    return false;
                }
            } else{
                if(occupiedBlack.includes(temp) && magnitude === i+1){
                    return false;
                }
                if(occupiedWhite.includes(temp) && magnitude === i+1){
                    return true;
                }
            }
            if(magnitude === i+1){
                return true;
            }
        }
    } else{
        return false;
    }
}