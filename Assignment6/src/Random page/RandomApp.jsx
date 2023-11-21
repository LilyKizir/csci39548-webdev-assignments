import RandomStore from "./RandomStore";
import Random from "./Random";
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'

export default function RandomApp(){
    const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
  <Provider store={RandomStore}>
    <Random/>
  </Provider>
)}