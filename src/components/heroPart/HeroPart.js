import React from 'react'
import Palette from '../../constants/Palette'

function HeroPart() {
  return (
    <div style={{height: "90vh"}} className='relative'>

      <div className='socials mt-4 mr-2'>
        <div className='w-5 ml-auto space-y-1'>
          <img src='/assets/discord.png' className='w-5' />
          <img src='/assets/twitter.png' className='w-5' />
          <img src='/assets/youtube.png' className='w-5' />
          <img src='/assets/instagram.png' className='w-5' />
        </div>
      </div>

      <div className='hero_content text-center mt-40'>
        <img src='/assets/Group.png' className='w-20 mx-auto' />
        <h1 className="text-4xl my-10">Welcome to the Gorée Island</h1>
        <button style={{color: Palette.brow , background: Palette.yellow , border: "solid 1px"}}  className='px-5 py-1 rounded-md'>Explore...</button>
      </div>

    </div>
  )
}

export default HeroPart