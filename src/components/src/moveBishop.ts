import { Square } from "../../store/actions/chessboardTypes";
import { Chesspiece } from "../../store/actions/chesspieceTypes";
import { mapCoordinates } from "./chessLogic";

export default (piece: Chesspiece, square: Square, occupied: [string, string][]) => {

    const occupiedSquares = occupied.map(p => p[1]);
    const occupiedWhite = occupied.filter(piece => piece[0][0] === 'w').map(p => p[1]);
    const occupiedBlack = occupied.filter(piece => piece[0][0] === 'b').map(p => p[1]);

    let move = [square.coord[0] - piece.coord[0], square.coord[1] - piece.coord[1]]

    if(move[0] === 0 && move[1] === 0){
        return false;
    }
    
    if(Math.abs(move[0]) !== Math.abs(move[1])){
        return false;
    } else{
        
        let iter = Math.abs(move[0])
        if(move[0] > 0 && move[1] > 0){
            // RIGHT-UP
            for(let i = 1; i<iter+1; i++){
                let tmp = mapCoordinates([piece.coord[0] + i, piece.coord[1] + i])

                if(occupiedSquares.includes(tmp) && i !== iter){
                    return false;
                }

                if(piece.color === "WHITE"){
                    if(i === iter && occupiedWhite.includes(tmp)){
                        return false;
                    }
                } else{
                    if(i === iter && occupiedBlack.includes(tmp)){
                        return false;
                    }
                }
            }
        } else if(move[0] > 0 && move[1] < 0){
            // RIGHT-DOWN
            for(let i = 1; i<iter+1; i++){
                let tmp = mapCoordinates([piece.coord[0] + i, piece.coord[1] - i])

                if(occupiedSquares.includes(tmp) && i !== iter){
                    return false;
                }

                if(piece.color === "WHITE"){
                    if(i === iter && occupiedWhite.includes(tmp)){
                        return false;
                    }
                } else{
                    if(i === iter && occupiedBlack.includes(tmp)){
                        return false;
                    }
                }
            }
        } else if(move[0] < 0 && move[1] < 0){
            // LEFT-DOWN
            for(let i = 1; i<iter+1; i++){
                let tmp = mapCoordinates([piece.coord[0] - i, piece.coord[1] - i])

                if(occupiedSquares.includes(tmp) && i !== iter){
                    return false;
                }

                if(piece.color === "WHITE"){
                    if(i === iter && occupiedWhite.includes(tmp)){
                        return false;
                    }
                } else{
                    if(i === iter && occupiedBlack.includes(tmp)){
                        return false;
                    }
                }
            }
        } else{
            // LEFT-UP
            for(let i = 1; i<iter+1; i++){
                let tmp = mapCoordinates([piece.coord[0] - i, piece.coord[1] + i])

                if(occupiedSquares.includes(tmp) && i !== iter){
                    return false;
                }

                if(piece.color === "WHITE"){
                    if(i === iter && occupiedWhite.includes(tmp)){
                        return false;
                    }
                } else{
                    if(i === iter && occupiedBlack.includes(tmp)){
                        return false;
                    }
                }
            }
        }

        return true;
    }
}