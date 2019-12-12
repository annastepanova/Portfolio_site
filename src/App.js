import React from 'react'
import './App.css'
import NavBar from "./Navbar"
import './header.css'
import Section from "./Section"
import aboutText from "./AboutText"
import Header from "./Header"
import Intro from "./Intro"
import Skills from "./Skills"


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
        dark={true}
        id="section2"
      />
      <Skills/>
      </div>
      <Section
        title="Portfolio"
        id="section3"
      />
      <Section
        title="Contacts"
        subtitle={aboutText}
        dark={true}
        id="section4"
      />
      <Section
        id="section5"
      />
    </div>
  )
}
}
export default App
