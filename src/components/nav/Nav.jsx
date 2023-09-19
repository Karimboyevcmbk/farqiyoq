import { useState } from 'react'
import "./nav.scss"
import saytLogo from "../../assets/saytlogo1.svg"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

const Nav = () => {
  const [navberDisplay,setNavberDisplay]=useState("none")
  function navbar(){
    setNavberDisplay("block")
  }
  function navbars(){
    setNavberDisplay("none")
  }
  return (
    <nav>
      <img src={saytLogo} alt="" />
      <ul className='nav-side-routes'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">ABOUTUS</Link></li>
        <li><Link to="/createyourplan">CREATE YOUR PLAN</Link></li>
      </ul>
      <div onClick={navbar} className='hamburger'><GiHamburgerMenu/></div>
      <div style={{display:`${navberDisplay}`}} className='navbarMobil'>
        <Link to="/">Home</Link>
        <Link to="/aboutus">ABOUTUS</Link>
        <Link to="/createyourplan">CREATE YOUR PLAN</Link>
        <div onClick={navbars} className='closeButton'><AiOutlineClose/></div>
      </div>
    </nav>
  )
}

export default Nav