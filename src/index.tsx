import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";


ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
document.getElementById('root')
);


