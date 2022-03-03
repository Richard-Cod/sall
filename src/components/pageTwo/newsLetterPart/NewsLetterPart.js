import React from 'react'
import { Palette } from '../../../constants'

function NewsLetterPart() {
  return (
    <div style={{background: Palette.brow }} className='pt-20 px-4'>
      <div className='text-center'>
        <h1 style={{color: Palette.yellow}} className='underline text-3xl'> Join Us ! </h1>

        <div className='flex flex-row justify-center items-center mt-2'>
          <div  style={{border: "solid " + Palette.yellow  }} className='border-2 h-8 w-1/2'>
            <input placeholder='email..' style={{background: Palette.brow}} className='outline-none' />
          </div>
          <button style={{color: Palette.brow , background: Palette.yellow , border: "solid 1px"}}  className='px-5 py-1 ml-[-10px]'>send</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetterPart