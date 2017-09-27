import React from 'react'
import Link from 'gatsby-link'

import '../styles/navbar.scss'

const Navbar = () => (
  <div className="outerNavDiv">
    <div className="middleNavDiv">
      <div className="navigation">
        <Link className="link" to="/about/">about</Link>
        <Link className="link" to="/events/">events</Link>
        <Link className="link" to="/media/">media</Link>
        <Link className="link" to="/personnel">personnel</Link>
      </div>
  </div>
</div>
)

export default Navbar