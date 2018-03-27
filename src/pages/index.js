import React from 'react'
import Link from 'gatsby-link'
import {Helmet} from 'react-helmet'

import Navbar from '../components/navbar.js'
import About from '../components/about.js'
import Title from '../components/title.js'

import '../styles/index.css'
import '../styles/normalize.css'

export default class IndexPage extends React.Component {

constructor(props) {
  super(props);
  this.state = { width: 0, height: "100vh" };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
  this.splash.style.height = (this.state.height + "px");
}

  render(){
    return(
      <div>
      <Helmet>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
        </Helmet>
        <div id="splash" ref={(splash) => {this.splash = splash}}>
          <p id="down-arrow">▾</p>
        </div>
        <div className="contentArea">
          <Title/>
          <Navbar/>
          <About/>
        </div>
      </div>
    );
  }
};
