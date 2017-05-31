import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

/**
 * Action
 */
const INCREMENT = "INCREMENT";

function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    };
}

/**
 * Reducer
 */
const initialState = {
    value: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        default:
            return state;
    }
};

const store = createStore(counterReducer);

class App extends Component {
    constructor(props) {
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => {
            this.setState(this.props.store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    _insertNumber(number) {
        this.props.store.dispatch(increase(number));
    }

    render() {
        let centerStyle = {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            WebKitUserSelect: "none",
            MozUserSelect: "none",
            MsUserSelect: "none",
            userSelect: "none",
            cursor: "pointer"
        };

        let centerStyle2 = {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            WebKitUserSelect: "none",
            MozUserSelect: "none",
            MsUserSelect: "none",
            userSelect: "none"
        };

        return (
            <div style={centerStyle}>
                <h1>{this.props.store.getState().value}</h1>
                <Number onInsert={this._insertNumber.bind(this)} />
            </div>
        );
    }
}

class Number extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: ""
        };
    }

    handleChange(e) {
        this.setState({
            number: e.target.value
        });
    }

    handleClick() {
        this.props.onInsert(parseInt(this.state.number, 10));
        this.setState({
            number: ""
        });
    }

    render() {
        return (
            <div>
                <input
                    type="number"
                    name="number"
                    placeholder="number"
                    value={this.state.number}
                    onChange={this.handleChange.bind(this)}
                />
                <button onClick={this.handleClick.bind(this)}>
                    PLUS!
                </button>
            </div>
        );
    }
}

const render = () => {
    const appElement = document.getElementById("app");
    ReactDOM.render(<App store={store} />, appElement);
};

store.subscribe(render);
render();
