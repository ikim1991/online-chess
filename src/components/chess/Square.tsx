import React from 'react';

class Square{

    name: string;
    column: {[key: string]: number};
    row: number;
    value: number;
    coord: number[];

    constructor(row: number, column: {[key: string]: number}, value: number){
        this.name = `${row}${Object.keys(column)[0]}`;
        this.row = row;
        this.column = column;
        this.coord = [Object.values(column)[0], row]
        this.value = value
    }

    createSquare(){
        return(
            <div className={`${this.name} square`} key={this.value}>{`(${this.coord[0]}, ${this.coord[1]})`}</div>
        )
    }
}

export default Square;