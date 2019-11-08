import React, { Component } from 'react';

class Box extends Component {

    render() {
        
        let boxClass = `Box ${this.props.alive}`

        return (
            <div className={boxClass}>
                {/* box numbers availible for debugging */}
                {/* {this.props.number}  */}
            </div>
        );
    }
}   

export default Box;