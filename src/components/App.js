import React from "react";
import ReactDOM from "react-dom";
import Contact from "./Contact";

class App extends React.Component {
    sayHey() {
        alert("Hey!");
    }

    render() {
        return <Contact />;
    }
}

export default App;
