import { useState } from 'react'
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
import UserProfile from './components/UserProfile'
import AuthModal from './components/AuthModal'
import { useAuth } from './contexts/AuthContext'

function Navigation() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showUserProfile, setShowUserProfile] = useState(false)

  const { user, isAuthenticated } = useAuth()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const handleAuthClick = () => {
    if (isAuthenticated) {
      setShowUserProfile(!showUserProfile)
    } else {
      setShowAuthModal(true)
    }
    closeMenu()
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHomePage 
          ? 'opacity-0 hover:opacity-100 bg-slate-900/95 backdrop-blur-md hover:shadow-lg hover:border-b hover:border-slate-700' 
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
              <button
                onClick={handleAuthClick}
                className={`capitalize font-medium transition-all duration-300 ${
                  isAuthenticated 
                    ? 'text-royal-400 hover:text-royal-300' 
                    : 'text-slate-300 hover:text-royal-400'
                }`}
              >
                {isAuthenticated ? user.name : 'login'}
              </button>
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
              <button
                onClick={handleAuthClick}
                className={`capitalize font-medium transition-all duration-300 py-2 hover:scale-105 ${
                  isAuthenticated 
                    ? 'text-royal-400 hover:text-royal-300' 
                    : 'text-slate-200 hover:text-royal-400'
                }`}
              >
                {isAuthenticated ? user.name : 'login'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User Profile Dropdown - Only for authenticated admin */}
      {showUserProfile && isAuthenticated && user?.role === 'admin' && (
        <div className="fixed top-16 right-4 lg:right-8 z-40">
          <UserProfile />
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </>
  )
}

export default function App() {
  const currentYear = new Date().getFullYear()
  
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

          {/* Copyright Footer */}
          <footer className="bg-slate-900/95 backdrop-blur-md border-t border-slate-700 py-4 px-4">
            <div className="container mx-auto text-center">
              <p className="text-slate-300 text-sm font-medium">
                {currentYear} Alexander Selga. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  )
}
