import Footer from "./components/footer/Footer"
import GalleryPart from "./components/galleryPart/GalleryPart"
import HeroPart from "./components/heroPart/HeroPart"
import Navbar from "./components/navbar/Navbar"
import NewsLetterPart from "./components/newsLetterPart/NewsLetterPart"
import RoadMap from "./components/roadMap/RoadMap"
import TimePart from "./components/timePart/TimePart"

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroPart />
      <TimePart />
      <GalleryPart />
      <RoadMap />
      <NewsLetterPart />
      <Footer />
    </div>
  )
}