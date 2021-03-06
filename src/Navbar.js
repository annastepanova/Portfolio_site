import React, { Component } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import './navbar.css'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div id="fix">
      <input id="burger" type="checkbox" />
      <label for="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav id="navbar">
        <div className="inner-nav">
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
                GITHUB
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>  
      </nav>
      </div>
    )
  }
}
