import React from 'react'
import { Router, Link, Switch } from 'react-router-dom'
import './styles.css'
const Header = () => {
  return (
    <header>
      <h1><a href="/">Home^U</a></h1>
      <nav>
        <ul className="nav-links">
          <li><a>Rent</a></li>
          <li><a>Sell</a></li>
          <li><a>Buy</a></li>
        </ul>
      </nav>
      <a href="#"><button className="nav-btn">Sign up</button></a>
    </header>
  )
}

export default Header
