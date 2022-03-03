import React from 'react'
import { Palette, ROUTES } from '../../../constants'

function HeroPart() {
  return (
    <div style={{height: "90vh"}} className='relative'>

      <div className='socials mt-4 mr-2'>
        <div className='w-8 ml-auto'>
          <a href={ROUTES.aboutUs}>
          <img className='my-1' src='/assets/discord.png' />
          </a>
          <a href={ROUTES.aboutUs}>
          <img className='my-1' src='/assets/twitter.png' />
          </a>
          <a href={ROUTES.aboutUs}>
          <img className='my-1' src='/assets/youtube.png' />
          </a>
          <a href={ROUTES.aboutUs}>
          <img className='my-1' src='/assets/instagram.png' />
          </a>
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