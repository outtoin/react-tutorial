import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

class Hello extends React.Component {
    handleClick() {
        this.input.value = "";
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input ref={ref => this.input = ref} />
                <button onClick={this.handleClick.bind(this)}>Click Me!</button>
            </div>
        );
    }
}

//const rootElement = document.getElementById("root");
ReactDOM.render(<Hello />, document.getElementById("app"));
