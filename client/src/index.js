/************************************************************
*           SAMUEL MICHALCIK - BACHELOR THESIS (2023)       *
*         "Programming IT hardware comparison website"      *
*                                                           *
*     Specification:                                        *
*     The aim of the bachelor thesis is to create           *
*     a website to help with the selection of the ideal     *
*     computer for the customer. The primary functionality  *
*     of the website is to filter the ideal computer        *
*     from a displayed list of computers, or database,      *
*     based on input requirements. The customer will be     *
*     able to filter products by price, usage and other     *
*     selected parameters. As a result, the customer may be *
*     presented with a number of the best alternatives,     *
*     which he/she has the opportunity to compare with      *
*     each other and get an overview of which computer      *
*     performs better. For less knowledgeable customers,    *
*     the site must provide concise information and         *
*     instructions on how to choose the right computer.     *
*     The website may also provide a contact form,          *
*     for more information.                                 *
*                                                           *
*     STACK:                                                *
*       - html                                              *
*       - css                                               *
*       - js                                                *
*       - react                                             *
*       - node                                              *
*       - express                                           *
*       - mysql                                             *
*       - sequelize                                         *
*                                                           *
************************************************************/

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './components/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

