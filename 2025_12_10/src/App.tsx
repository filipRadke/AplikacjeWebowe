import './App.css'
import { BrowserRouter} from "react-router";

import Header from "./assets/header.tsx";
import Footer from "./assets/footer.tsx";
import MainRouter from "./assets/mainRouter.tsx";


function App() {
  return (
      <BrowserRouter>
          <Header/>
          <MainRouter/>
          <Footer/>
      </BrowserRouter>
  )
}

export default App
