import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Help from './components/Help';
import UserLogin from './components/UserLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <App /> 
    // </React.StrictMode>
);
