import { Footer } from "../components/shared"

import React from 'react'
import { Navbar } from "../components/pageTwo"

function Card({title="", desc1= "lorem", desc2= "lorem",desc3= "lorem" , isBlack=false}) {
  return (
    <div className="relative  mx-auto w-48 text-lg text-white">
    <img src={`/assets/ellipse${isBlack?"2" :""}.png`} className="w-52 h-44" />
    <div 
    style={{transform : "translateY(-50%)"}} 
    className="absolute top-1/2 left-10">
      <h1>{title}</h1>
      <h1 className="text-ellipsis">{desc1}</h1>
      <h1 className="text-ellipsis">{desc2}</h1>
      <h1 className="text-ellipsis">{desc3}</h1>
    </div>
  </div>
  )
}

function Item() {
  return (
    <div className="space-y-6 flex items-center">
      <img src="/assets/person.png" className="w-52 h-32" />
      <Card title="Slaves" />
    </div>
  )
}

export default function PageThree() {
  const data = [1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div>
      <Navbar />
      <div className="my-10">
        <Card title="Slaves" description="" />
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4  md:grid-cols-3 gap-4  space-x-3 my-5 px-4">
          {data.map((v) => <Item />)}
        </div>
        <Card isBlack title="Visit House of Slave" desc1="" desc2="" desc3="" />
      </div>


      <div className="max-w-6xl h-[600px] mx-auto bg-black mb-10">

      </div>
      
        <Footer />
      </div>
  )
}
