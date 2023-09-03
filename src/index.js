import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { App } from "./App";

const rootElement = document.getElementById("root");

const rootToRender = ReactDOM.createRoot(rootElement);

rootToRender.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
)