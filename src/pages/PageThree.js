import { Footer, SlaveCard, SlaveItem } from "../components/shared"

import { Navbar } from "../components/pageTwo"

export default function PageThree() {
  const data = [1,1,1,1,1,1,1,1]
  return (
    <div>
      <Navbar />
      <div className="my-10">
        <SlaveCard title="Slaves" description="" />
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4  md:grid-cols-3 gap-4  space-x-3 my-5 px-4">
          {data.map((v) => <SlaveItem />)}
        </div>
        <SlaveCard isBlack title="Visit House of Slave" desc1="" desc2="" desc3="" />
      </div>


      <img className="h-[80vh] w-full mb-10 md:px-10" src="/assets/pageThreeImg.png" />

      
        <Footer />
      </div>
  )
}
