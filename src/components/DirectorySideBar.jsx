import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function DirectorySideBar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = (e, targetId, href) => {
    e.preventDefault()
    setIsOpen(false)
    
    // If it's an external page link, navigate directly
    if (href) {
      window.location.href = href
      return
    }
    
    // For same-page scrolling
    if (window.location.pathname !== '/projects') {
      navigate('/projects#' + targetId)
    } else {
      // Smooth scroll to the target element with offset for title visibility
      const element = document.getElementById(targetId)
      if (element) {
        const offset = 80 // Offset to ensure title is visible below navigation
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const handleNavigation = (path) => {
    setIsOpen(false)
    navigate(path)
  }

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed left-4 top-20 z-50 flex flex-col justify-center items-center w-14 h-14 sm:w-10 sm:h-10 bg-slate-800/95 backdrop-blur-md border border-slate-600 rounded-full shadow-lg space-y-1.5 focus:outline-none hover:bg-slate-700/95 hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out"
        aria-label="Toggle menu"
      >
        <span className={`block w-7 h-0.5 bg-slate-100 transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}></span>
        <span className={`block w-7 h-0.5 bg-slate-100 transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}></span>
        <span className={`block w-7 h-0.5 bg-slate-100 transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}></span>
      </button>

      {/* Sidebar Menu */}
      <div className={`fixed left-0 top-0 h-full w-80 sm:w-72 bg-slate-900/98 backdrop-blur-xl border-r border-slate-700/50 shadow-2xl z-40 transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6 pt-24 sm:pt-20">
          <div className="flex items-center justify-center mb-8">
            <h3 className="text-2xl font-semibold text-slate-100 tracking-wide text-center">Navigation</h3>
          </div>
          
          <div className="flex-1 space-y-2">
            {/* Projects */}
            <Link
              to="/projects"
              onClick={() => handleNavigation('/projects')}
              className="block px-4 py-4 text-slate-100 hover:text-royal-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium text-lg"
            >
              Projects
            </Link>
            
            {/* Archive with nested items */}
            <div className="mt-4">
              <a
                href="/projects#archive"
                onClick={(e) => handleLinkClick(e, 'archive')}
                className="block px-4 py-3 text-slate-300 hover:text-royal-400 hover:bg-slate-800/30 rounded-lg transition-all duration-200 font-medium text-base"
              >
                Archive
              </a>
              <div className="ml-4 mt-2 space-y-1">
                <Link
                  to="/poems"
                  state={{ from: 'projects' }}
                  onClick={() => handleNavigation('/poems')}
                  className="block px-4 py-3 text-slate-400 hover:text-royal-400 hover:bg-slate-800/20 rounded-md transition-all duration-200 text-base"
                >
                  Poems
                </Link>
                <Link
                  to="/journal-entries"
                  state={{ from: 'projects' }}
                  onClick={() => handleNavigation('/journal-entries')}
                  className="block px-4 py-3 text-slate-400 hover:text-royal-400 hover:bg-slate-800/20 rounded-md transition-all duration-200 text-base"
                >
                  Journal Entries
                </Link>
              </div>
            </div>
            
            {/* Work Experience */}
            <a
              href="/projects#work-experience"
              onClick={(e) => handleLinkClick(e, 'work-experience')}
              className="block px-4 py-3 text-slate-300 hover:text-royal-400 hover:bg-slate-800/30 rounded-lg transition-all duration-200 font-medium text-base"
            >
              Work Experience
            </a>
            
            {/* Skills Development */}
            <a
              href="/projects#skills-development"
              onClick={(e) => handleLinkClick(e, 'skills-development')}
              className="block px-4 py-3 text-slate-300 hover:text-royal-400 hover:bg-slate-800/30 rounded-lg transition-all duration-200 font-medium text-base"
            >
              Skills Development
            </a>
            
            {/* Personal Projects */}
            <a
              href="/projects#personal-projects"
              onClick={(e) => handleLinkClick(e, 'personal-projects')}
              className="block px-4 py-3 text-slate-300 hover:text-royal-400 hover:bg-slate-800/30 rounded-lg transition-all duration-200 font-medium text-base"
            >
              Personal Projects
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
