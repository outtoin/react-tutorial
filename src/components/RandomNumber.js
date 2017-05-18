import React from 'react';
import ReactDOM from 'react-dom';

class RandomNumber extends React.Component {
    updateNumber() {
        let value = Math.round(Math.random() * 1000);
        this.props.onUpdate(value);
    }

    constructor(props){
        super(props);
        this.updateNumber = this.updateNumber.bind(this);
    }

    render() {
        return (
            <div>
                <button onClick={this.updateNumber}>Randomize!</button>
                <h1>Random Number: {this.props.number}</h1>
            </div>
        );
    }
}

export default RandomNumber;