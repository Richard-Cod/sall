import ROUTES from "./constants/Routes"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PageOne, PageThree, PageTwo } from "./pages";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.pageOne} element={<PageOne />} />
      <Route path={ROUTES.pageTwo} element={<PageTwo />} />
      <Route path={ROUTES.pageThree} element={<PageThree />} />
    </Routes>
  </BrowserRouter>

  )
}