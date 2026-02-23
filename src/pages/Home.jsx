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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-midnight-900 via-slate-900 to-blue-950">
      {/* Hero Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={heroImage} alt="Hero Background" className="w-3/5 h-auto max-h-screen object-contain opacity-40" />
      </div>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 - Top Left */}
        <div className="absolute top-20 left-20 w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-float-orb-1"></div>
        
        {/* Orb 2 - Top Right */}
        <div className="absolute top-32 right-16 w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-float-orb-2"></div>
        
        {/* Orb 3 - Bottom Center */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-float-orb-3"></div>
        
        {/* Orb 4 - Bottom Left */}
        <div className="absolute bottom-32 left-24 w-72 h-72 sm:w-80 sm:h-80 lg:w-24 lg:h-24 bg-midnight-600 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-float-orb-1 animation-delay-4000"></div>
        
        {/* Orb 5 - Top Center */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-72 h-72 sm:w-80 sm:h-80 lg:w-24 lg:h-24 bg-slate-600 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-float-orb-2 animation-delay-2000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100 mb-4 sm:mb-6">
          <span className="bg-gradient-to-r from-royal-400 via-blue-500 to-midnight-400 bg-clip-text text-transparent animate-gradient">
            Alexander Selga
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Interested in collaborating on hospitality projects or discussing customer service opportunities? 
          Let's connect and create exceptional experiences together.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 justify-center flex-wrap">
          <Link
            to="/about"
            className="px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-9 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 2xl:py-4.5 bg-slate-700/85 border border-royal-500 text-slate-100 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base rounded-full font-medium hover:bg-royal-500 hover:text-slate-900 hover:shadow-md hover:shadow-royal-500/20 transform hover:scale-105 transition-all duration-300 min-w-[70px] sm:min-w-[90px] md:min-w-[100px] lg:min-w-[110px] xl:min-w-[130px] 2xl:min-w-[150px] text-center backdrop-blur-md shadow-sm"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-9 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 2xl:py-4.5 bg-slate-700/85 border border-royal-500 text-slate-100 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base rounded-full font-medium hover:bg-royal-500 hover:text-slate-900 hover:shadow-md hover:shadow-royal-500/20 transform hover:scale-105 transition-all duration-300 min-w-[70px] sm:min-w-[90px] md:min-w-[100px] lg:min-w-[110px] xl:min-w-[130px] 2xl:min-w-[150px] text-center backdrop-blur-md shadow-sm"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-9 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 2xl:py-4.5 bg-slate-700/85 border border-royal-500 text-slate-100 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base rounded-full font-medium hover:bg-royal-500 hover:text-slate-900 hover:shadow-md hover:shadow-royal-500/20 transform hover:scale-105 transition-all duration-300 min-w-[70px] sm:min-w-[90px] md:min-w-[100px] lg:min-w-[110px] xl:min-w-[130px] 2xl:min-w-[150px] text-center backdrop-blur-md shadow-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
