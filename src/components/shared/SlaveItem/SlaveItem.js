
import { SlaveCard } from ".."

export default function SlaveItem({secondImg}) {
  return (
    <div className="space-y-6 flex items-center">
      <img src={`/assets/person${secondImg ?"2" : ""}.png`} className={`w-52 h-44  mt-[20px] ${secondImg ? "rounded-r-xl": ''}`} />
      <div className={`ml-[-45px] mt-[40px] `}>
      <SlaveCard title={`${secondImg ? "Master" : "Slave"}`} />
      </div>
    </div>
  )
}