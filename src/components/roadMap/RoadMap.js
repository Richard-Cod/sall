import React from 'react'
import Palette from '../../constants/Palette'


const data = [
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
]

function Ball({inverse}) {
  return (
    <div
    style={{
      background: Palette.yellow
    }}
    class={`absolute lg:flex items-center justify-center w-8 h-8 transform -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-[-2px] lg:left-1/2  ${ inverse ? "lg:ml-[10px]" : "lg:ml-[-40px]"}`}>
  </div>
  )
}


function Item({title , inverse}) {
  return inverse ?
            <div className='h-24'>
              <div class="flex flex-col items-center">
                <div class="flex items-center w-full mx-auto justify-end">
                  <div class="w-full lg:w-1/2 lg:pl-8 ml-5 lg:ml-0">
                    <div class="p-4 rounded shadow-lg">
                      <p className='text-white'> {title} </p>
                    </div>
                  </div>
                </div>
                <Ball inverse={inverse} />
              </div>
            </div>
            :
            <div className='h-24'>
              <div class="flex flex-col items-center">
                <div class="flex items-center w-full mx-auto justify-start">
                  <div class="w-full lg:w-1/2 lg:pr-8  ml-5 lg:ml-0">
                    <div class="p-4 rounded shadow-lg">
                      <p className='text-white'> {title} </p>
                    </div>
                  </div>
                </div>
                <Ball />
              </div>
            </div>
}


function Timeline() {
  return (
    <div class="flex flex-col justify-center py-6 lg:py-12">
        <div class="w-full mx-auto lg:max-w-4xl">

          <div class="relative">

            {/* <!-- Vertical middle line--> */}
            <div class="absolute ml-3 lg:ml-0 w-1 lg:left-1/2 h-full transform -translate-x-1/2 bg-red-200 block "></div>

            <div class="space-y-12 lg:space-y-8">

                {data.map((value , i) => {
                return <Item
                title={value}
                inverse={i%2!==0}
              />
              })}
              
            </div>
          </div>
        </div>
     </div>
  )
}


function RoadMap() {
  return (
    <div style={{background: Palette.brow , minHeight: "80vh"}} className='pt-10'>


      <div className='text-center max-w-md mx-auto'>
        <img className='h-14 mx-auto' src='/assets/roadmapbtn.svg' />
      </div>



      <Timeline />

      
    </div>
  )
}

export default RoadMap