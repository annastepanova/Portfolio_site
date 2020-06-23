import React from "react"
import './header.css'
import { Parallax } from 'react-parallax'
import img from './images/forest.jpg'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import email from './images/email.jpg'
import resume from './images/resume.png'


const insideStyles = {
  position: "absolute",
  top: "13%",
  left: "14%",
  maxWidth: "100%"
}

class Header extends React.Component {

  state = {
    bgImage: './images/forest.jpg'
  }
  
  render () {
   return (
     <div>
       <Parallax bgImage={img} strength={600} bgImageSizes={{maxWidth: '100%'}}>
         <div style={{ height: '650px' }} className="overlay">
         <div className="promo-text" style={insideStyles}>
           <div className="promo">
           <h1 className="name">Anna <br/> Stepanova</h1>
           <p className="title">Full-Stack Web Developer</p>
           </div>  
           <ul className="links">
             <li><a href="https://www.linkedin.com/in/annastepanova1811/" target="blank" title="linkedin"><img src={linkedin} alt="linkedin" /></a></li>
             <li><a href="https://github.com/annastepanova" target="blank" title="github"><img src={github} alt="github" /></a></li>
             <li><a href="mailto:annastepanova1811@gmail.com" target="blank" title="email"><img src={email} alt="email" /></a></li>
             <li><a href="https://drive.google.com/file/d/1c-D4TYhDVNUA5NQzDW8WnTrXG9F7h_BC/view?usp=sharing" target="blank" title="resume"><img src={resume} alt="resume" /></a></li>
           </ul>
           </div>
        </div>
        
       </Parallax>

     </div>
)
}

}
export default Header
