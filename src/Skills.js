import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const FlippyStyle = {
  width: '284px',
  height: '284px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center',
  cursor: 'pointer'
}


export default class Skills extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    }
  }

 
  render() {
    return (
      <div className="skills">
      <p className="paragraph">I specialise in full-stack development as my knowledge of multiple fields allows me to work on a project with the full scope in mind.</p>
        <div className="flippy" style={{ display: 'flex', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
        <Flippy style={FlippyStyle}>
          <FrontSide
            style={{
                    backgroundColor: '#41669d',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around' 
            }}
          >
            FRONT-END
          </FrontSide>
          <BackSide
            style={{ 
                    backgroundColor: '#175852',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '30px',
                   justifyContent: 'space-around' }}>
              HTML, CSS, Bootstrap, CSS Grid, Flexbox, Javascript, React
          </BackSide>
          </Flippy>
          <Flippy style={FlippyStyle}>
            <FrontSide
              style={{
                    backgroundColor: '#41669d',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
              }}
            >
              BACK-END
          </FrontSide>
            <BackSide
              style={{ 
                    backgroundColor: '#175852',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around' 
              }}>
              Node.js, Express, SQL, Ruby, Ruby on Rails, REST API
          </BackSide>
          </Flippy>
          <Flippy style={FlippyStyle}>
            <FrontSide
              style={{
                    backgroundColor: '#41669d',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
              }}
            >
              Other Languages, Deploy & Design
          </FrontSide>
            <BackSide
              style={{
                    backgroundColor: '#175852',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
              }}>
              Markdown, Python, Command Line, Heroku, Git, GitHub, Invision
          </BackSide>
          </Flippy>
        </div>
        </div> 
    )
  }
}
