import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterApp from "./reducers/index";
import App from "./components/App";

const store = createStore(counterApp);
const appElement = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    appElement
);
