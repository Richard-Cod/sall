


export default function SlaveCard({title="", desc1= "lorem", desc2= "lorem",desc3= "lorem" , isBlack=false}) {
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

