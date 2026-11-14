import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Quote from './pages/Quote'

import './pages/Pages.css'

function App() {
  return (
    // BrowserRouter watches the URL in the address bar
    <BrowserRouter>
      <Routes>
        {/* Every route inside Layout gets the Navbar and Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App