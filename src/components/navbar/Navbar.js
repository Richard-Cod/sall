import React from 'react'
import Palette from '../../constants/Palette'
import Routes from '../../constants/Routes'

function Navbar() {
  return (
    <div className='flex py-3' style={{background: Palette.brow}}>

      <img className='w-7 h-7 ml-2' src="/assets/logo.png" />
      <ul className='nav md:flex space-x-3 ml-32 hidden'>
        <li style={{color: Palette.yellow}}><a href={Routes.houseOfSlaves}>House of Slaves</a></li>
        <li style={{color: Palette.yellow}}><a href={Routes.roadmap}>RoadMap</a></li>
        <li style={{color: Palette.yellow}}><a href={Routes.aboutUs}>About us</a></li>
        <li style={{color: Palette.yellow}}><a href={Routes.termsAndConditions}>Terms & Conditions</a></li>
      </ul>

      <ul className='nav md:flex hidden space-x-3 ml-auto mr-2 md:mr-32'>
        <button style={{color: Palette.yellow , border: "solid 1px"}}  className='px-5 py-1 rounded-md'>Log in</button>
        <button style={{color: Palette.brow , background: Palette.yellow , border: "solid 1px"}}  className='px-5 py-1 rounded-md'>Register</button>
      </ul>

      <ul className='nav md:hidden flex space-x-3 ml-auto mr-2 md:mr-32'>
        <button style={{color: Palette.brow , background: Palette.yellow , border: "solid 1px"}}  className='px-5 py-1 rounded-md'>M</button>
      </ul>

    </div>
  )
}

export default Navbar