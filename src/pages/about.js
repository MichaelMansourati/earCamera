import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'
import About from '../components/about.js'
import Title from '../components/title.js'

import '../styles/index.scss'

const about = () => (
  <div className="mainContainer">
    <div className="contentArea">
      <Title/>
      <Navbar/>
      <About/>
    </div>
  </div>
)

export default about