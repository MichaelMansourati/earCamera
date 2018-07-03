import React from 'react'
import Link from 'gatsby-link'

import '../styles/navbar.css'

const Navbar = () => (
  <div className="navigation">
    <a className="link" href="#about">
      about
    </a>
    <a className="link" href="#events">
      events
    </a>
    <a className="link" href="#media">
      media
    </a>
  </div>
)

export default Navbar
