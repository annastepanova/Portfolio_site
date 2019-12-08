import React from 'react'
import './App.css'
import NavBar from "./Navbar"
import './header.css'
import Section from "./Section"
import aboutText from "./AboutText"
import Header from "./Header"


class App extends React.Component {

render(){
  return (
    <div className="App">
      <NavBar />
      <Header/>
      <Section
        title="About me"
        subtitle={aboutText}
        dark={true}
        id="section1"
      />
      <Section
        title="Skills"
        subtitle={aboutText}
        dark={false}
        id="section2"
      />
      <Section
        title="Portfolio"
        subtitle={aboutText}
        dark={true}
        id="section3"
      />
      <Section
        title="Contacts"
        subtitle={aboutText}
        dark={false}
        id="section4"
      />
      <Section
        id="section5"
      />
    </div>
  );
}
}
export default App
