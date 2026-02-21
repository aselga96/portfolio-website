import './index.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path
  const isHomePage = location.pathname === '/'

  // Don't render navigation on home page
  if (isHomePage) {
    return null
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-sage-200' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/"
            className="text-xl sm:text-2xl font-bold text-sage-900 cursor-pointer hover:text-green-600 transition-colors"
          >
            Alexander Selga
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {[
              { path: '/', name: 'home' },
              { path: '/about', name: 'about' },
              { path: '/projects', name: 'projects' },
              { path: '/skills', name: 'skills' },
              { path: '/contact', name: 'contact' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`capitalize font-medium transition-all duration-300 hover:text-green-600 ${
                  isActive(item.path) ? 'text-green-600' : 'text-sage-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Hidden on Home Page */}
          {!isHomePage && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-sage-700 p-2 rounded-lg hover:bg-sage-100 transition-colors"
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 bg-sage-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-sage-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-sage-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          )}
        </div>

        {/* Mobile Menu - Hidden on Home Page */}
        {!isHomePage && (
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="py-4 px-4 bg-white/95 backdrop-blur-md border-t border-sage-200 space-y-1 max-h-96 overflow-y-auto">
              {[
                { path: '/', name: 'home' },
                { path: '/about', name: 'about' },
                { path: '/projects', name: 'projects' },
                { path: '/skills', name: 'skills' },
                { path: '/contact', name: 'contact' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left capitalize py-3 px-4 rounded-lg transition-all duration-300 hover:bg-sage-50 hover:text-green-600 ${
                    isActive(item.path) ? 'text-green-600 bg-green-50 font-medium' : 'text-sage-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-sage-100 via-sage-200 to-green-50">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}
