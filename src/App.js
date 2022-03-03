import ROUTES from "./constants/Routes"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PageOne, PageThree, PageTwo } from "./pages";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";
import PageSix from "./pages/PageSix";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.pageOne} element={<PageOne />} />
      <Route path={ROUTES.home} element={<PageTwo />} />
      <Route path={ROUTES.pageTwo} element={<PageTwo />} />
      <Route path={ROUTES.pageThree} element={<PageThree />} />
      <Route path={ROUTES.pageFour} element={<PageFour />} />
      <Route path={ROUTES.pageFive} element={<PageFive />} />
      <Route path={ROUTES.pageSix} element={<PageSix />} />
    </Routes>
  </BrowserRouter>

  )
}


