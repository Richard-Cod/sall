import { Footer, SlaveCard, SlaveItem } from "../components/shared"

import React from 'react'
import { Navbar } from "../components/pageTwo"

export default function PageSix() {
  const data = [1,1,1,1,1]
  return (
    <div>
      <Navbar />
      <div className="my-10">
        <SlaveCard title="Masters" desc1="" desc2="" desc3=""/>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4  md:grid-cols-3 gap-4  space-x-3 my-5 px-4">
          {data.map((v) => <SlaveItem secondImg />)}
        </div>
      </div>

        <Footer />
      </div>
  )
}
