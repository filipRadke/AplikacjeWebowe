import './App.scss'
import { BrowserRouter} from "react-router";

import Head from "./assets/head.tsx";
import Foot from "./assets/foot.tsx";
import MainRouter from "./assets/mainRouter.tsx";

function App() {
  return (
      <BrowserRouter>
          <Head/>
          <MainRouter/>
          <Foot/>
      </BrowserRouter>
  )
}

export default App
