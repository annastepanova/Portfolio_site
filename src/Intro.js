import React from 'react'
import me from './images/me.jpg'

export default class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <div className="mypicture">
          <img src={me} alt="me" className="me"/>
          <p>#Never Stop Learning</p>
        </div>  
          <div className="intro-text">
            <p>Hey there! My name is Anna.</p>
            <p>I am originally from Moscow, Russia. I live in Miami, Florida.</p>
            <p>I love to create beautuful things and find solutions to make it work perfectly.</p>
            <p>I am a graduate of <a href="https://wyncode.co" target="blank" className="link"> Wyncode Academy.</a></p>
            <p>I am constantly pursuing my passion to learn more about programming languages,</p>
            <p>frameworks and techniques in order to become a more well-rounded Web Developer.</p>
          </div>
      </div>
    )
  }
}
