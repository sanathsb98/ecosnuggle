import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import ScrollToTop from './components/ScrollToTop'
import ScrollToSection from './components/ScrollToSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
      <ScrollToSection/>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

