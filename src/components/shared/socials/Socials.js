
import React from 'react'
import { ROUTES } from '../../../constants'



function Socials({classNames=""}) {
  return (
    <div className={classNames}>
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
  )
}

export default Socials