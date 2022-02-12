import React from 'react'
import Palette from '../../constants/Palette'
function GalleryPart() {
  return (
    <div style={{background: Palette.brow , minHeight: "80vh"}} className='pt-20 px-4'>

      <div className='text-center'>
        <h1 style={{color : Palette.yellow }} className='uppercase text-3xl underline'>Gallery</h1>
        <p className='text-white max-w-xl mx-auto my-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </p>

        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-4 gap-4 md:gap-10 mt-5'>
            {[1,1,1,1,1,1,1,1,1,1,1,1].map((value) => {
              return <img src='https://picsum.photos/200/300' className='h-24 w-full' />
            })}
          </div>
        <button style={{color: Palette.brow , background: Palette.yellow , border: "solid 1px"}}  className='px-5 py-3 rounded-md mt-10'>View more</button>

        </div>

      </div>

    </div>
  )
}

export default GalleryPart