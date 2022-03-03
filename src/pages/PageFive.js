import { Footer } from "../components/shared"

import React from 'react'
import { Navbar } from "../components/pageTwo"
import { Palette } from "../constants"

export default function PageFour() {
  const data = [1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div>
      <Navbar isWhite />
    <div className='flex py-3' style={{background: Palette.brow}}>
      <h1 className="mx-auto text-lg uppercase" style={{color: Palette.yellow}}>Explore Gorée island</h1>
    </div>
      
      <img className="h-[90vh] w-full" src="/assets/pageFiveImg2.png" />
        <Footer />
      </div>
  )
}
