import React from 'react'
import site from './images/miamidadesite.png'
import oddjobs from './images/oddjobs.png'
import eternity from './images/eternity.png'
import chat from './images/chat.png'
import './portfolio.css'

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    let style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <div class="header-container">
        <div class="hovereffect">
      <header style={style} id={image} className="card-header">
        <div class="overlay">
          <a class="info" href={this.props.href}>See on GitHub</a>
        </div>
      </header>
        </div>
      </div>
    )
  }
}


class ButtonOne extends React.Component {
  render() {
    return (
      <div className="explore-button">
        <a href="https://contaminated-sites-search.herokuapp.com" target="blank"><button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Explore
      </button></a>
      </div>
    )
  }
}

class ButtonTwo extends React.Component {
  render() {
    return (
      <div className="explore-button">
      <a href="https://oddjobs-react.herokuapp.com/" target="blank"><button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Explore
      </button></a>
      </div>
    )
  }
}

class ButtonThree extends React.Component {
  render() {
    return (
      <div className="explore-button">
        <a href="https://eternitycreators.firebaseapp.com/" target="blank"><button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Explore
      </button></a>
      </div>
    )
  }
}


class ButtonFour extends React.Component {
  render() {
    return (
      <div className="explore-button">
        <a href="https://realtime-talks.firebaseapp.com/" target="blank"><button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Explore
      </button></a>
      </div>
    )
  }
}


class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        
        <h2>{this.props.title}</h2>
        
        <p className="body-content">{this.props.text}</p>
        
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <>
      <article className="article">
        <CardHeader image={site}
            href={'https://github.com/annastepanova/contaminated_sites_search'}/>
        <CardBody title={'MIAMI-DADE CONTAMINATED SITE SEARCH'} text={'React.js web site allows Miami-Dade residents to view designated areas where environmental contamination has been documented.'}/>
        <ButtonOne/>
      </article>
      <article className="article">
          <CardHeader image={oddjobs} href={'https://github.com/annastepanova/Odd_Jobs'}/>
        <CardBody title={'ODD JOBS'} text={'Web site for searching and hiring independent contractors across Miami-Dade area. Based on React.js front-end and Rails API back-end.'}/>
         <ButtonTwo/>
      </article>
      <article className="article">
        <CardHeader image={eternity} href={'https://github.com/annastepanova/Create_Eternity_API'} />
        <CardBody title={'CREATE ETERNITY'} text={'Web site for sharing and reading original short stories. Based on React.js front-end, Node.js, Express.js and MongoDB back-end.'} />
        <ButtonThree />
      </article>
      <article className="article">
          <CardHeader image={chat} href={'https://github.com/annastepanova/Realtime-Chat-App'} />
        <CardBody title={'REALTIME GROUP CHAT'} text={'Online group chat web app. Based on React.js front-end, Node.js, Express.js and Socket.io library back-end.'} />
        <ButtonFour />
      </article>
      </>
    )
  }
}

export default Card
