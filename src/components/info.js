import React, { Component } from 'react';

class Info extends Component {

    render() {
        
        return (
            <div className='Info'>
                <h1>Conways Game of Life</h1>
                <p>The Game of Life is a fun zero player game with the following rules.</p>
                <ul>
                    <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                    <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                    <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                    <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                </ul>
                <p>You can read all about this facinating game and find other fantastic implementations <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">here</a>.</p>
                <p>Enjoy this basic implementation below with a random seed. Approimately 20% of the cells will start alive and the game will progress from there.</p>
            </div>
        );
    }
}   

export default Info;