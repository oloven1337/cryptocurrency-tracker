import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from "styled-components";
import {BrowserRouter} from "react-router-dom";

import {App} from './app';
import {Header} from "./components/header";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1400px;
  }
`

ReactDOM.render(
    <>
        <GlobalStyle/>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </>
    , document.getElementById('root')
)
