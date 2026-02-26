import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Poems from './pages/Poems'
import PoemPage from './pages/PoemPage'
import JournalEntries from './pages/JournalEntries'
import JournalEntryPage from './pages/JournalEntryPage'
import Contact from './pages/Contact'

// Import components
import Footer from './components/Footer'

// Mobile viewport height fix - allow natural address bar behavior
const useViewportHeight = () => {
  useEffect(() => {
    const setViewportHeight = () => {
      // Calculate the actual viewport height
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      
      // Also set a fallback for browsers that don't support CSS custom properties
      const root = document.documentElement
      root.style.height = `${window.innerHeight}px`
    }

    // Set initial viewport height
    setViewportHeight()

    // Update viewport height on resize and orientation change
    // But not on scroll to allow natural address bar behavior
    const handleResize = () => {
      setViewportHeight()
    }
    
    const handleOrientationChange = () => {
      setTimeout(setViewportHeight, 100) // Delay for orientation change
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [])
}

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
          ? 'opacity-0 hover:opacity-100 bg-slate-900/95 backdrop-blur-md hover:shadow-lg hover:border-b hover:border-slate-700 pointer-events-none hover:pointer-events-auto' 
          : 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link 
              to="/"
              onClick={closeMenu}
              className={`text-xl sm:text-2xl font-bold cursor-pointer transition-colors duration-300 ${
                isHomePage 
                  ? 'text-white hover:text-royal-400' 
                  : 'text-slate-100 hover:text-royal-400'
              }`}
            >
              Alexander Selga
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <Link to="/" className="capitalize font-medium text-slate-300 hover:text-royal-400 transition-all duration-300">home</Link>
              <Link to="/about" className="capitalize font-medium text-slate-300 hover:text-royal-400 transition-all duration-300">about</Link>
              <Link to="/projects" className="capitalize font-medium text-slate-300 hover:text-royal-400 transition-all duration-300">projects</Link>
              <Link to="/contact" className="capitalize font-medium text-slate-300 hover:text-royal-400 transition-all duration-300">contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Menu - Only show on non-homepage */}
      {!isHomePage && (
        <button
          onClick={toggleMenu}
          className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col justify-center items-center w-12 h-12 bg-slate-800/95 backdrop-blur-md border border-slate-600 rounded-full shadow-lg space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 bg-slate-100 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 bg-slate-100 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 bg-slate-100 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>
      )}

      {/* Mobile Menu - Only show on non-homepage */}
      {!isHomePage && (
        <div className={`lg:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
          isMenuOpen ? 'max-h-80 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        }`}>
          <div className="bg-slate-800/95 backdrop-blur-md border border-slate-600 rounded-2xl shadow-2xl p-6 mx-4 min-w-[200px]">
            <div className="flex flex-col space-y-4 text-center">
              <Link 
                to="/" 
                onClick={closeMenu}
                className="capitalize font-medium text-slate-200 hover:text-royal-400 transition-all duration-300 py-2 hover:scale-105"
              >
                home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className="capitalize font-medium text-slate-200 hover:text-royal-400 transition-all duration-300 py-2 hover:scale-105"
              >
                about
              </Link>
              <Link 
                to="/projects" 
                onClick={closeMenu}
                className="capitalize font-medium text-slate-200 hover:text-royal-400 transition-all duration-300 py-2 hover:scale-105"
              >
                projects
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className="capitalize font-medium text-slate-200 hover:text-royal-400 transition-all duration-300 py-2 hover:scale-105"
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
  
  // Apply mobile viewport height fix
  useViewportHeight()
  
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-midnight-950 flex flex-col">
          <Navigation />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/poems" element={<Poems />} />
              <Route path="/poems/:poemId" element={<PoemPage />} />
              <Route path="/journal-entries" element={<JournalEntries />} />
              <Route path="/journal-entries/:entryId" element={<JournalEntryPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Footer with Consolidated Auth Controls */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}
