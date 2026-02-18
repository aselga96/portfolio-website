import './index.css'
import { useState, useEffect } from 'react'

// Import your images here
import heroImage from './assets/hero.jpg'
import profileImage from './assets/profile.jpg'
// import project1Image from './assets/project1.jpg'
// import project2Image from './assets/project2.jpg'
// import project3Image from './assets/project3.jpg'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-stone-200 to-yellow-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-amber-100/95 backdrop-blur-md shadow-lg border-b border-stone-300' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-stone-800">
              <span className="bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent">
                Alexander Selga
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-amber-600 ${
                    activeSection === section ? 'text-amber-600' : 'text-stone-700'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-stone-800"
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 bg-stone-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-stone-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-stone-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
            <div className="py-4 space-y-2">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize py-2 transition-all duration-300 hover:text-amber-600 ${
                    activeSection === section ? 'text-amber-600' : 'text-stone-700'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={heroImage} alt="Hero Background" className="w-3/5 h-auto max-h-screen object-contain opacity-40" />
        </div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-stone-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-6">
            <span className="bg-gradient-to-r from-amber-600 via-stone-700 to-yellow-700 bg-clip-text text-transparent animate-gradient">
              Alexander Selga
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Building exceptional digital experiences with modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-stone-700 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-stone-700 text-stone-700 rounded-full font-semibold hover:bg-stone-700 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-stone-700 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-stone-700 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 text-center mb-16">
            About <span className="text-amber-600">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-[32rem] h-[32rem] mx-auto rounded-full overflow-hidden border-4 border-stone-300 shadow-2xl">
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover scale-700" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-stone-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
            </div>
            <div className="space-y-6">
              <p className="text-stone-600 text-lg leading-relaxed">
                I'm a passionate full-stack developer with expertise in creating beautiful, functional web applications. 
                I love turning ideas into reality through clean code and innovative design.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                With a strong foundation in modern web technologies, I specialize in building responsive, 
                performant applications that deliver exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-stone-100/80 backdrop-blur-md rounded-lg p-4 border border-stone-300">
                  <div className="text-3xl font-bold text-amber-600 mb-2">3+</div>
                  <div className="text-stone-700">Years Experience</div>
                </div>
                <div className="bg-stone-100/80 backdrop-blur-md rounded-lg p-4 border border-stone-300">
                  <div className="text-3xl font-bold text-stone-600 mb-2">50+</div>
                  <div className="text-stone-700">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 text-center mb-16">
            Featured <span className="text-amber-600">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Modern online shopping experience with React and Node.js',
                tech: ['React', 'Node.js', 'MongoDB'],
                color: 'from-amber-500 to-stone-600',
                image: '🛒' // Add your image path here
              },
              {
                title: 'Task Management App',
                description: 'Collaborative project management tool with real-time updates',
                tech: ['Vue.js', 'Firebase', 'Tailwind'],
                color: 'from-stone-500 to-yellow-600',
                image: '📋' // Add your image path here
              },
              {
                title: 'Weather Dashboard',
                description: 'Beautiful weather app with location-based forecasts',
                tech: ['JavaScript', 'API', 'Charts.js'],
                color: 'from-yellow-500 to-amber-600',
                image: '🌤' // Add your image path here
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative bg-stone-100/80 backdrop-blur-md rounded-xl overflow-hidden border border-stone-300 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 flex items-center justify-center text-4xl`}>
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{project.title}</h3>
                  <p className="text-stone-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-100/80 rounded-full text-xs text-stone-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 text-center mb-16">
            Technical <span className="text-amber-600">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'JavaScript', level: 90, color: 'bg-amber-500' },
              { name: 'React', level: 85, color: 'bg-stone-600' },
              { name: 'Node.js', level: 80, color: 'bg-yellow-600' },
              { name: 'CSS/Tailwind', level: 88, color: 'bg-amber-600' },
              { name: 'Python', level: 75, color: 'bg-stone-500' },
              { name: 'MongoDB', level: 70, color: 'bg-yellow-500' }
            ].map((skill, index) => (
              <div key={index} className="bg-stone-100/80 backdrop-blur-md rounded-lg p-6 border border-stone-300">
                <div className="flex justify-between mb-2">
                  <span className="text-stone-800 font-semibold">{skill.name}</span>
                  <span className="text-stone-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-stone-300 rounded-full h-3">
                  <div
                    className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 text-center mb-16">
            Get In <span className="text-amber-600">Touch</span>
          </h2>
          <div className="bg-stone-100/80 backdrop-blur-md rounded-2xl p-8 border border-stone-300">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/80 border border-stone-300 rounded-lg text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/80 border border-stone-300 rounded-lg text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-white/80 border border-stone-300 rounded-lg text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-white/80 border border-stone-300 rounded-lg text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600 transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-600 to-stone-700 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-8 flex justify-center space-x-6">
              {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
                <button
                  key={index}
                  className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-700 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                >
                  {social === 'GitHub' && '🐙'}
                  {social === 'LinkedIn' && '💼'}
                  {social === 'Twitter' && '🐦'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-stone-600 border-t border-stone-300">
        <p>&copy; 2024 Alexander Selga. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  )
}
