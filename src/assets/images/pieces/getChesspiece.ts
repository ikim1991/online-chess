import bb from './bishop.black.png';
import wb from './bishop.white.png';
import bk from './king.black.png';
import wk from './king.white.png';
import bkn from './knight.black.png';
import wkn from './knight.white.png';
import bp from './pawn.black.png';
import wp from './pawn.white.png';
import bq from './queen.black.png';
import wq from './queen.white.png';
import br from './rook.black.png';
import wr from './rook.white.png';

export default (_id: string) => {
    if(_id[0] === 'w'){
        if(_id[1] === 'p'){
            return wp
        } else if(_id[1] === 'k' && _id.length > 2){
            return wkn
        } else if(_id[1] === 'b'){
            return wb
        } else if(_id[1] === 'r'){
            return wr
        } else if(_id[1] === 'k' && _id.length === 2){
            return wk
        } else if(_id[1] === 'q'){
            return wq
        }
    } else{
        if(_id[1] === 'p'){
            return bp
        } else if(_id[1] === 'k' && _id.length > 2){
            return bkn
        } else if(_id[1] === 'b'){
            return bb
        } else if(_id[1] === 'r'){
            return br
        } else if(_id[1] === 'k' && _id.length === 2){
            return bk
        } else if(_id[1] === 'q'){
            return bq
        }
    }
}