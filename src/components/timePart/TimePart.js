import React from 'react'
import Palette from '../../constants/Palette'


function Part({title , description }) {
  return (
    <div className='space-y-4'>
      <h1 style={{color: Palette.yellow}}> {title} </h1>
      <h1 className='max-w-xs text-white text-xs'> {description} </h1>
      <button style={{color: Palette.yellow , border: "solid 1px"}}  className='px-5 py-1 rounded-md'>Voir...</button>

    </div>
  )
}


function Item({title , description , inverse = false}) {
  return (
    <div className={`space-y-4 md:flex items-center ${inverse ? "flex-row-reverse" : ""}`}>
      <img className='w-full md:w-1/2 h-96' src='https://picsum.photos/200/300' />
      <div className='md:w-1/2 md:pl-20 space-y-4'>
        <h1 style={{color: Palette.yellow}}> {title} </h1>
        <h1 className='md:max-w-xs text-white text-xs'> {description} </h1>
      </div>
    </div>
  )
}

function TimePart() {
  const data = [1,1,1,1]
  const data2 = [1,1]
  return (
    <div style={{background: Palette.brow , minHeight: "80vh"}} className=''>

      <div className='px-10 pt-10'>
        <h1 className='text-2xl max-w-xs' style={{color: Palette.yellow}}>
        Go back in time and relive the period of slavery in Gorée island like never before...
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
        {data.map((a) => {
          return <Part 
          title="House of Slaves"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
          />
        })}
        </div>

        <div className='mt-20 space-y-10'>
        {data2.map((value , i) => {
          return <Item
          inverse={i%2!=0}
          title="House of Slaves"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
          />
        })}
        </div>


      </div>
    </div>
  )
}

export default TimePart