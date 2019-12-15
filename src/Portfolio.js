import React from 'react'
import site from './images/miamidadesite.png'
import oddjobs from './images/oddjobs.png'
import './portfolio.css'

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
      </header>
    )
  }
}

class ButtonOne extends React.Component {
  render() {
    return (
      <div className="explore-button">
      <a href="http://www.miamicontaminatedsites.com/" target="blank"><button className="button button-primary">
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
        <CardHeader image={site}/>
        <CardBody title={'MIAMI-DADE CONTAMINATED SITE SEARCH'} text={'React.js web site allows Miami-Dade residents to view designated areas where environmental contamination has been documented.'}/>
        <ButtonOne/>
      </article>
      <article className="article">
        <CardHeader image={oddjobs}/>
        <CardBody title={'ODD JOBS'} text={'Web site for searching and hiring independent contractors across Miami-Dade area. Based on React.js front-end and Rails API back-end.'}/>
         <ButtonTwo/>
      </article>
      </>
    )
  }
}

export default Card
