import React from 'react'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar.js'
import About from '../components/about.js'
import Title from '../components/title.js'
import Events from '../components/events.js'
import Media from '../components/media.js'

import '../styles/index.css'
import '../styles/normalize.css'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossorigin="anonymous"
          />
        </Helmet>
        <div id="splash">
          <p id="down-arrow">▾</p>
        </div>
        <div className="mainContainer">
          <div className="contentArea">
            <Title />
            <Navbar />
            <About style={{ minHeight: "100vh" }} />
            <Events />
            <Media />
          </div>
        </div>
      </div>
    )
  }
}
