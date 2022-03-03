import React from 'react'
import {Palette , ROUTES} from "../../../constants"
function Footer() {
  return (
    <div style={{background: Palette.brow , minHeight: "10vh"}} className='px-4 py-10'>

    <div className='md:px-4'>

      <ul style={{color: Palette.yellow}} className='text-center space-y-2 md:text-left shadow-lg py-4 md:flex justify-between'>
        <p className=''>
        <a href={ROUTES.termsAndConditions} className=''>Mobile app</a>
        </p>
        <p>
        <a href={ROUTES.termsAndConditions} className=''>Our Team</a>
        </p>
        <p>
          <a href={ROUTES.termsAndConditions} className=''>Our Designer</a>
        </p>
        <p>
          <a href={ROUTES.termsAndConditions} className=''>
            <img className='mx-auto' src='/assets/logo.png' />
          </a>
        </p>
        <p>
          <a href={ROUTES.termsAndConditions} className=''>Help desk</a>
        </p>
        <p>
          <a href={ROUTES.termsAndConditions} className=''>Blog</a>
        </p>
        <p>
          <a href={ROUTES.termsAndConditions} className=''>Terms & Conditions</a>
        </p>
        

      </ul>


      <div className='socials mt-4 mr-2 text-center py-20'>
        <div className='flex justify-between max-w-[200px] items-center mx-auto'>
          <a href={ROUTES.aboutUs}>
          <img src='/assets/discord.png' className='w-10 h-8 rounded-full' />
          </a>
          <a href={ROUTES.aboutUs}>
          <img src='/assets/twitter.png' className='w-10 h-8 rounded-full' />
          </a>
          <a href={ROUTES.aboutUs}>
            <img src='/assets/youtube.png' className='w-10 h-8 rounded-full' />
          </a>
          <a href={ROUTES.aboutUs}>
          <img src='/assets/instagram.png' className='w-10 h-8 rounded-full' />
          </a>
        </div>

        <p className='text-xs mt-5' style={{color: Palette.yellow}}>
        © WhiteSlaves, Inc. 2022. See different! It's only digital art
        </p>
      </div>


    </div>
    </div>
  )
}

export default Footer