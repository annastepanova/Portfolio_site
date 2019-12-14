import React from 'react'
import './App.css'
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Home"


class App extends React.Component {

render(){
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
    </div>
  )
}
}
export default App
