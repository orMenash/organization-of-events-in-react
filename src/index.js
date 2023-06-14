import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Route } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       
        <CookiesProvider>
            <Routes />
        </CookiesProvider>

    </BrowserRouter>
);
