import React from 'react'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Navbar from '../components/navbar.js'
import About from '../components/about.js'
import Title from '../components/title.js'
import Events from '../components/events.js'
import Media from '../components/media.js'
import MobileSplash from '../components/mobileSplash.js'

import events from '../assets/events.js'

import '../styles/index.css'
import '../styles/normalize.css'

const Logger = props => {
  console.log("props", props);
}

const IndexPage = ( {data} ) => (
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
    <MobileSplash sizes={data.allFile.edges[0].node.childImageSharp.sizes} />
    <div className="mainContainer">
      <div className="contentArea">
        <Title />
        <Navbar />
        <About />
        <Events />
        <Media />
      </div>
    </div>
  </div>
)

 export default IndexPage

export const query = graphql`
  query MobileSplashQuery {
    allFile(filter: {
      name: {regex: "/^logo$/"}
    }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`
