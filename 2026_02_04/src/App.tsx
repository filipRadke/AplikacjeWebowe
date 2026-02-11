import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router"
import Home from "./scenes/Home";
import Posts from "./scenes/Posts";
import Contact from "./scenes/Contact";
import SinglePost from "./scenes/SinglePost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wpisy" element={<Posts />} />
        <Route path="/wpisy/:id" element={<SinglePost />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
