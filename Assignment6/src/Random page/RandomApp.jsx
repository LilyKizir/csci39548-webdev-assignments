import RandomStore from "./RandomStore";
import Random from "./Random";
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

export default function RandomApp(){
    const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <BrowserRouter>
  <Provider store={RandomStore}>
    <Random/>
  </Provider>
    </BrowserRouter>
)}