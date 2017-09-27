import React from 'react'
import Link from 'gatsby-link'

import '../styles/navbar.scss'

const Navbar = () => (
  <div className="navigation">
    <Link className="link" to="/about/">about</Link>
    <Link className="link" to="/events/">events</Link>
    <Link className="link" to="/media/">media</Link>
    <Link className="link" to="/personnel">personnel</Link>
    <Link className="link" to="/another-thing/">another thing</Link>
  </div>
)

export default Navbar