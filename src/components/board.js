import React, { Component } from 'react';

import Box from './box';

// how many row and col do we need based off size of grid (10x10 boxes)
let rows = 50;
let cols = 50;

class Board extends Component {

    UNSAFE_componentWillMount(){
        this.makeSeed();
    }

    componentDidMount(){
        setInterval(() => {
            this.keepAlive();
        }, 1000)
    }

    state = {} // initial state

    makeSeed() { // create a initial seed with random data
        
        for(let i = 0; i < rows; i ++){

            // eslint-disable-next-line no-new-object
            let newCols = new Object();
            
            for(let x = 0; x < cols; x++){
                newCols[x] = Math.floor(Math.random() * 10 ) > 7 ? true : false;
            }

            this.setState({
                [i]: newCols
            })
        }
    }
    
    drawBoxes(){
        let boxes = [];
        Object.keys(this.state).forEach((row, i) => {
            Object.keys(this.state[row]).forEach((box) => {
                boxes.push(this.state[row][box])
            })
        })

        let returnBoxes = boxes.map((box, index) => {
            return <Box key={index} alive={box} number={index}/>;
        })

        return returnBoxes;
    };

    checkNeighbours(row, col, thisGen){
        let count = 0;

        // check top
        if(row !== 0){ // don't look outside the scope
            if(thisGen[row-1][col]){
                count ++
            }
        }
        // check top left
        if(row !== 0 && col !== 0){ // don't look outside the scope
            if(thisGen[row-1][col -1]){
            count ++
                }
        }

        //check top right
        if(row !== 0 && col !== 49){ // don't look outside the scope
            if(thisGen[row-1][col +1]){
            count ++
            }
        }

        //chcek right
        if(col !== 49){
            if(thisGen[row][col +1]){
                count ++
            }
        }

        //check bottom
        if(row !== 49){ // don't look outside the scope
            if(thisGen[row+1][col]){
                count ++
            }
        }

        //check bottom left
        if(row !== 49 && col !== 0){ // don't look outside the scope
        if(thisGen[row+1][col -1]){
                count ++
            }
        }

        //check bottom right
        if(row !== 49 && col !== 49){ // don't look outside the scope
            if(thisGen[row+1][col +1]){
                count ++
            }
        }

        //chcek left
        if(col !== 0){
            if(thisGen[row][col -1]){
                count ++
            }
        }

        return count;
    }

    keepAlive(){
        console.log('fire')
        const thisGen = this.state;
        let nextGen = thisGen;

        for(let i = 0; i < 50; i++){
            let row = i;
            for(let x = 0; x < 50; x++){
                let col = x;
                let count = this.checkNeighbours(row, col, thisGen);

                if(thisGen[row][col]){                    
                    
                    if(count < 2){ // Any live cell with fewer than two live neighbours dies, as if by underpopulation
                        nextGen[row][col] = false;
                    } else if(count === 2 || count === 3) { //Any live cell with two or three live neighbours lives on to the next generation.
                        nextGen[row][col] = true;
                    } else if(count > 3){ //Any live cell with more than three live neighbours dies, as if by overpopulation.
                        nextGen[row][col] = false;
                    }
                    
                } else if(!thisGen[row][col]){

                    if(count === 3) { //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                        nextGen[row][col] = true;
                    }
                }
            }
            
        }

        this.setState(nextGen);
    }

    render() {
        
        let createBoxes = this.drawBoxes();

        return (
            <div className="Board">
                {createBoxes}
            </div>
        );
    }
}   

export default Board;