import React from "react"
import './header.css'
import { Parallax } from 'react-parallax'
import img from './images/forest.jpg'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import email from './images/email.jpg'
import resume from './images/resume.png'


const insideStyles = {
  padding: 10,
  position: "absolute",
  top: "13%",
  left: "14%"
}

class Header extends React.Component {
  
  render () {
   return (
     <div>
       <Parallax blur={{ min: -1, max: 0 }} bgImage={img} strength={600}>
         <div style={{ height: '600px' }} className="overlay">
         <div style={insideStyles}>
           <div className="promo">
           <h1 className="name">Anna <br/> Stepanova</h1>
           <p className="title">Full-Stack Web Developer</p>
           </div>  
           <ul className="links">
             <li><a href="https://www.linkedin.com/in/annastepanova1811/" target="blank"><img src={linkedin} alt="linkedin" /></a></li>
             <li><a href="https://github.com/annastepanova" target="blank"><img src={github} alt="github" /></a></li>
             <li><a href="mailto:annastepanova1811@gmail.com" target="blank"><img src={email} alt="email" /></a></li>
               <li><a href="https://drive.google.com/file/d/12BHXI8tFgsHSyLHcMyRtvrgF8HSrINtC/view?usp=sharing" target="blank"><img src={resume} alt="resume" /></a></li>
           </ul>
           </div>
        </div>
        
       </Parallax>

     </div>
)
}
}
export default Header
