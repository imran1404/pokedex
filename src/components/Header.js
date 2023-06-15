import React from 'react'
import logo from "../images/pikachu.png"
import "./style.css"
const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="Pokedex Logo" />
        <h1>Pokedex</h1>
    </div>
  )
}

export default Header