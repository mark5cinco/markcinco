import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import App from "./components/App";
import {theme} from './theme';
import {MuiThemeProvider} from "@material-ui/core";

// ReactGA.initialize('UA-42928197-3');
// ReactGA.pageview(window.location.pathname + window.location.search);
// console.log(window.location.pathname + window.location.search);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
