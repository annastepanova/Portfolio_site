import React from 'react'
import './App.css'
import NavBar from "./Navbar"
import './header.css'
import Section from "./Section"
import Header from "./Header"
import Intro from "./Intro"
import Skills from "./Skills"
import MyForm from "./Myform"


class App extends React.Component {

render(){
  return (
    <div className="App">
      <NavBar />
      <Header/>
      <Section
        title="Intro"
        id="section1"
      />
      <Intro/>
      <div className="container">
      <Section
        title="Skills"
        id="section2"
      />
      <Skills/>
      </div>
      <Section
        title="Portfolio"
        id="section3"
      />
      <div className="container">
      <Section
        title="Contacts"
        id="section4"
      />
      <MyForm/>
      </div>
      <Section
        id="section5"
      />
    </div>
  )
}
}
export default App
