import { COLOR } from '../../types/types';

class ChessPiece{

    color: COLOR;
    inPlay: boolean;
    position: string;
    coord: [number, number];

    constructor(color: COLOR, position: string, coord: [number, number]){
        this.color = color;
        this.inPlay = true;
        this.position = position;
        this.coord = coord
    }
}

export default ChessPiece;