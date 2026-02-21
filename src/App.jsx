import './index.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function Navigation() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHomePage 
          ? 'opacity-0 hover:opacity-100 bg-white/95 backdrop-blur-md hover:shadow-lg hover:border-b hover:border-sage-200' 
          : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-sage-200'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link 
              to="/"
              onClick={closeMenu}
              className={`text-xl sm:text-2xl font-bold cursor-pointer transition-colors duration-300 ${
                isHomePage 
                  ? 'text-white hover:text-sage-900' 
                  : 'text-sage-900 hover:text-green-600'
              }`}
            >
              Alexander Selga
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <Link to="/" className="capitalize font-medium text-sage-700 hover:text-green-600 transition-all duration-300">home</Link>
              <Link to="/about" className="capitalize font-medium text-sage-700 hover:text-green-600 transition-all duration-300">about</Link>
              <Link to="/projects" className="capitalize font-medium text-sage-700 hover:text-green-600 transition-all duration-300">projects</Link>
              <Link to="/skills" className="capitalize font-medium text-sage-700 hover:text-green-600 transition-all duration-300">skills</Link>
              <Link to="/contact" className="capitalize font-medium text-sage-700 hover:text-green-600 transition-all duration-300">contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Menu - Only show on non-homepage */}
      {!isHomePage && (
        <button
          onClick={toggleMenu}
          className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col justify-center items-center w-12 h-12 bg-white/95 backdrop-blur-md border border-sage-300 rounded-full shadow-lg space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 bg-sage-900 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 bg-sage-900 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 bg-sage-900 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>
      )}

      {/* Mobile Menu - Only show on non-homepage */}
      {!isHomePage && (
        <div className={`lg:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
          isMenuOpen ? 'max-h-80 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border border-sage-300 rounded-2xl shadow-2xl p-6 mx-4 min-w-[200px]">
            <div className="flex flex-col space-y-4 text-center">
              <Link 
                to="/" 
                onClick={closeMenu}
                className="capitalize font-medium text-sage-700 hover:text-green-600 transition-all duration-300 py-2 hover:scale-105"
              >
                home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className="capitalize font-medium text-sage-700 hover:text-green-600 transition-all duration-300 py-2 hover:scale-105"
              >
                about
              </Link>
              <Link 
                to="/projects" 
                onClick={closeMenu}
                className="capitalize font-medium text-sage-700 hover:text-green-600 transition-all duration-300 py-2 hover:scale-105"
              >
                projects
              </Link>
              <Link 
                to="/skills" 
                onClick={closeMenu}
                className="capitalize font-medium text-sage-700 hover:text-green-600 transition-all duration-300 py-2 hover:scale-105"
              >
                skills
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className="capitalize font-medium text-sage-700 hover:text-green-600 transition-all duration-300 py-2 hover:scale-105"
              >
                contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function App() {
  const currentYear = new Date().getFullYear()
  
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-sage-100 via-sage-200 to-green-50 flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Copyright Footer */}
        <footer className="bg-sage-900/90 backdrop-blur-md border-t border-sage-700 py-4 px-4">
          <div className="container mx-auto text-center">
            <p className="text-sage-300 text-sm">
              © {currentYear} Alexander Selga. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}
