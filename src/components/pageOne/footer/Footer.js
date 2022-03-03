import React from 'react'
import { Palette } from '../../../constants'
import Socials from '../../shared/socials/Socials'


function Footer() {
  return (
    <div style={{backgroundColor: Palette.yellow}} className='py-2 px-3 flex text-white text-sm justify-between items-center'>
        <div className='mr-2 w-8'>
            <Socials  />
        </div>
        <ul style={{listStyle: 'disc'}} className='md:flex md:space-x-6 uppercase '>
            <li>roadmap</li>
            <li>about us</li>
            <li>contact</li>
            <li>terms & conditions</li>
        </ul>

        <div className='text-lg text-center'>
            <h3 >WhiteSlaves</h3>
            <h3>© 2022 White Slaves</h3>
        </div>
    </div>
  )
}

export default Footer