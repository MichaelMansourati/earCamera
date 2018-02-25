import React from 'react'
import Link from 'gatsby-link'

import '../styles/navbar.css'

const Navbar = () => (
  <div className="navigation">
    <Link className="link" to="/about/">about</Link>
    <Link className="link" to="/events/">events</Link>
    <Link className="link" to="/media/">media</Link>
  </div>
)

export default Navbar