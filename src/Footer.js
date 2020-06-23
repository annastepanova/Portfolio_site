import React from 'react'
import './footer.css'


export default class Footer extends React.Component {
  
  render() {
    return (
      <footer>
        <div class="row">
          <div class="footnote">
            <p>Looking for new exciting opportunites. Hire me!</p>
            <p>ANNA STEPANOVA <span class="highlight">©2020</span></p>
          </div>
          <div>
            <p>Location</p>
            <p>Miami, FL, United States</p>
          </div>
          <div>
            <p>Email</p>  
            <p><a href="mailto:annastepanova1811@gmail.com" target="blank" className="footer-link">annastepanova1811@gmail.com</a></p>
          </div>
        </div>
      </footer>
    )
  }
}