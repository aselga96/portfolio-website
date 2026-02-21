import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.jpg'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-50 via-sage-100 to-green-100">
      {/* Hero Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={heroImage} alt="Hero Background" className="w-3/5 h-auto max-h-screen object-contain opacity-40" />
      </div>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 - Top Left */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-sage-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-orb-1"></div>
        
        {/* Orb 2 - Top Right */}
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-orb-2"></div>
        
        {/* Orb 3 - Bottom Center */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-orb-3"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-sage-900 mb-4 sm:mb-6">
          <span className="bg-gradient-to-r from-green-700 via-sage-800 to-emerald-800 bg-clip-text text-transparent animate-gradient">
            Alexander Selga
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-sage-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Interested in collaborating on hospitality projects or discussing customer service opportunities? 
          Let's connect and create exceptional experiences together.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 justify-center flex-wrap">
          <Link
            to="/about"
            className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 2xl:py-4 bg-transparent border-2 border-sage-600 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base rounded-full font-semibold hover:bg-sage-600 hover:text-white hover:shadow-lg hover:shadow-sage-600/30 transform hover:scale-105 transition-all duration-300 min-w-[60px] sm:min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px] text-center"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 2xl:py-4 bg-transparent border-2 border-sage-600 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base rounded-full font-semibold hover:bg-sage-600 hover:text-white hover:shadow-lg hover:shadow-sage-600/30 transform hover:scale-105 transition-all duration-300 min-w-[60px] sm:min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px] text-center"
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 2xl:py-4 bg-transparent border-2 border-sage-600 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base rounded-full font-semibold hover:bg-sage-600 hover:text-white hover:shadow-lg hover:shadow-sage-600/30 transform hover:scale-105 transition-all duration-300 min-w-[60px] sm:min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px] text-center"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 2xl:py-4 bg-transparent border-2 border-sage-600 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base rounded-full font-semibold hover:bg-sage-600 hover:text-white hover:shadow-lg hover:shadow-sage-600/30 transform hover:scale-105 transition-all duration-300 min-w-[60px] sm:min-w-[80px] md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px] text-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
