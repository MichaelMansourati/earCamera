import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'
import About from '../components/about.js'
import Title from '../components/title.js'

import '../styles/index.scss'

const IndexPage = () => (
  <div className="mainContainer">
    <div className="splash">
      <p className="downArrow">⌄</p>
    </div>
    <div className="contentArea">
      <Title/>
      <Navbar/>
      <About/>
    </div>
  </div>
)

export default IndexPage
