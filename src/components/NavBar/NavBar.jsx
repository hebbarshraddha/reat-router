import React from 'react'
import { Link } from 'react-router-dom' // imported as soon v type <Link>.... ..inbuilt component.,.,.,,.,makesure that L is capital..

function NavBar() {
  return (
    <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default NavBar