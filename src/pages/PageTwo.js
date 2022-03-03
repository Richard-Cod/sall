import { GalleryPart, HeroPart,
     Navbar, NewsLetterPart, RoadMap,
      TimePart } from "../components/pageTwo"
import { Footer } from "../components/shared"

export default function PageTwo() {
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
