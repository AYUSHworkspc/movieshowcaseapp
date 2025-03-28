import React from 'react';
import ReactDom from "react-dom/client"

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from"react-router-dom";
import {Provider} from"react-redux";
import { store } from './store/Store.jsx';


  ReactDom.createRoot(document.getElementById("root")).render( 
  
<Provider store={store}>
  <BrowserRouter basename="/movieshowcaseapp" >
  <App />
  </BrowserRouter>
  </Provider>

  );
   
  

