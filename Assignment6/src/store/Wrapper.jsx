import Store from "./Store";
import Query from "../routes/Query";
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'

export default function RandomApp(){
    const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
  <Provider store={Store}>
    <Query/>
  </Provider>
)}