import React from "react";
import ReactDom from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <App />
        <ToastContainer />
    </BrowserRouter>
)