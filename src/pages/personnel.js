import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'
import Bios from '../components/bios.js'

const Personnel = () => (
  <div className="mainContainer">
    <div className="contentArea">
      <h1 id="title">ear camera</h1>
      <Navbar/>
      <div className="page-goes-here personnel">
        <div className="textArea">
          <h2>Personnel</h2>
          <Bios/>
        </div>
      </div>
    </div>
  </div>
  )

export default Personnel