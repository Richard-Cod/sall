import { Footer, GalleryPart, HeroPart,
     Navbar, NewsLetterPart, RoadMap,
      TimePart } from "../components/pageTwo"

export default function PageThree() {
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
