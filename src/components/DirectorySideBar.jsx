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

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed left-4 top-20 z-50 flex flex-col justify-center items-center w-10 h-10 bg-slate-800/95 backdrop-blur-md border border-slate-600 rounded-full shadow-lg space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 transition-all duration-300 bg-slate-100 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}></span>
        <span className={`block w-5 h-0.5 transition-all duration-300 bg-slate-100 ${
          isOpen ? 'opacity-0' : ''
        }`}></span>
        <span className={`block w-5 h-0.5 transition-all duration-300 bg-slate-100 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}></span>
      </button>

      {/* Sidebar Menu */}
      <div className={`fixed left-0 top-16 h-full w-64 bg-slate-800/95 backdrop-blur-md border-r border-slate-600 z-40 transition-all duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center mb-4">
            <h3 className="text-lg font-bold text-slate-100">Navigation</h3>
          </div>
          
          <div className="flex-1 space-y-2">
            {/* Projects */}
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="block p-2 text-slate-100 hover:text-royal-400 transition-colors"
            >
              Projects
            </Link>
            
            {/* Archive with nested items */}
            <div>
              <a
                href="/projects#archive"
                onClick={(e) => handleLinkClick(e, 'archive')}
                className="block p-2 text-slate-300 hover:text-royal-400 transition-colors text-sm ml-4"
              >
                Archive
              </a>
            </div>
            
            {/* Work Experience with spacing */}
            <a
              href="/projects#work-experience"
              onClick={(e) => handleLinkClick(e, 'work-experience')}
              className="block p-2 text-slate-300 hover:text-royal-400 transition-colors text-sm ml-4"
            >
              Work Experience
            </a>
            
            {/* Skills Development */}
            <a
              href="/projects#skills-development"
              onClick={(e) => handleLinkClick(e, 'skills-development')}
              className="block p-2 text-slate-300 hover:text-royal-400 transition-colors text-sm ml-4"
            >
              Skills Development
            </a>
            
            {/* Personal Projects */}
            <a
              href="/projects#personal-projects"
              onClick={(e) => handleLinkClick(e, 'personal-projects')}
              className="block p-2 text-slate-300 hover:text-royal-400 transition-colors text-sm ml-4"
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
