import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './navbar.css'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render() {
    return (
      <nav id="navbar">
          <ul className="navlist">
          <li className="nav-item">
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={this.scrollToTop}
            >
              HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SKILLS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
      </nav>
    )
  }
}





// export default class NavBar extends React.Component {
//   render () {
//   return (
//     <nav id="navbar">
//       <ul className="navlist">
//         {/* <li><NavLink className="navtext" smooth to="#top" activeClassName="selected">HOME</NavLink></li> */}
//         <li><NavLink to="#top">HOME</NavLink></li>
//         <li><NavLink className="navtext" smooth to="#about" activeClassName="selected">ABOUT</NavLink></li>
//         <li><NavLink className="navtext" exact to="/skills">SKILLS</NavLink></li>
//         <li><NavLink className="navtext" exact to="/projects">PROJECTS</NavLink></li>
//         <li><NavLink className="navtext" exact to="/contacts">CONTACTS</NavLink></li>
//       </ul>
//     </nav>
//   )

// }

//   componentDidMount() {
//     window.scrollTo(0, 0)
//   }

// }
