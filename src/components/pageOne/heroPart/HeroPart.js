import React from 'react'
import { Palette, ROUTES } from '../../../constants'
import Socials from '../../shared/socials/Socials'

function HeroPart() {
  return (
    <div style={{height: "95vh" , 
      backgroundImage: `url("https://static.nationalgeographic.fr/files/styles/image_3200/public/visite-goree-destination-senegal.jpg?w=1600")`,
   }} 
      className='relative'>
        
        <div className='flex items-center'>
          <img className='w-7 h-7 ml-2' src="/assets/logo.png" />
          <div className='mt-4 mr-2 w-32 ml-auto'>
              <Socials classNames='flex space-x-1'  />
          </div>
        </div>

      <div className='hero_content text-center mt-40'>
        <button style={{background: "rgb(0,0,0,0.6)" , color:'white'}}  className='px-6 py-3 rounded-full text-lg'>Explore Gorée Island</button>
      </div>

      

    </div>
  )
}

export default HeroPart