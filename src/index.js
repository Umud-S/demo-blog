import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

let reRender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
                {/*<App store={store} />*/}
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reRender(store.getState());
store.subscribe(reRender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
