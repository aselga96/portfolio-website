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
    <div className="min-h-screen bg-gradient-to-br from-sage-100 via-sage-200 to-green-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-sage-200' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-sage-900">
              <span className="bg-gradient-to-r from-green-600 to-sage-700 bg-clip-text text-transparent">
                Alexander Selga
              </span>
            </div>
            <div className="flex items-center space-x-6">
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize font-medium transition-all duration-300 hover:text-green-600 ${
                      activeSection === section ? 'text-green-600 border-b-2 border-green-600' : 'text-sage-700'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-sage-700 p-2 rounded-lg hover:bg-sage-100 transition-colors"
              >
                <div className="space-y-1">
                  <div className={`w-6 h-0.5 bg-sage-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-sage-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-sage-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
            <div className="py-4 px-4 bg-white/95 backdrop-blur-md border-t border-sage-200 space-y-1">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize py-3 px-4 rounded-lg transition-all duration-300 hover:bg-sage-50 hover:text-green-600 ${
                    activeSection === section ? 'text-green-600 bg-green-50 font-medium' : 'text-sage-700'
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-sage-300 to-green-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-drift animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-gradient-to-br from-emerald-300 to-sage-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse-slow animation-delay-4000"></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-sage-200 to-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float animation-delay-6000"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-sage-900 mb-6">
            <span className="bg-gradient-to-r from-green-700 via-sage-800 to-emerald-800 bg-clip-text text-transparent animate-gradient">
              Alexander Selga
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-sage-700 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on hospitality projects or discussing customer service opportunities? 
            Let's connect and create exceptional experiences together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-green-700 to-sage-800 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-sage-800 text-sage-800 rounded-full font-semibold hover:bg-sage-800 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sage-800 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sage-800 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 text-center mb-16">
            About <span className="text-green-700">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-[32rem] h-[32rem] mx-auto rounded-full overflow-hidden border-4 border-sage-500 shadow-2xl relative z-10">
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover scale-700" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-sage-600 rounded-full blur-xl opacity-50"></div>
            </div>
            <div className="space-y-6 p-8 bg-sage-100/60 backdrop-blur-md rounded-2xl border border-sage-300/50 shadow-lg">
              <p className="text-sage-700 text-lg leading-relaxed">
                I'm a passionate hospitality professional with over 5 years of experience in barista services, coffee catering, and customer relations. 
                I love creating exceptional experiences through quality service and attention to detail, bringing warmth and excellence to every interaction.
              </p>
              <p className="text-sage-700 text-lg leading-relaxed">
                My journey extends beyond hospitality into meaningful ministry work. I've dedicated over 10 years to pastoral ministry, serving as a missionary with Life Teen and focusing on youth outreach and spiritual guidance. 
                This included a transformative summer in 2022 serving in Dahlonega, Georgia, and earlier in July 2019, when I served with the Missioners of Christ in Honduras, experiencing powerful cross-cultural ministry.
                These experiences, combined with my background in retail, have shaped my ability to create welcoming environments and build lasting relationships in every context.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-sage-50/90 backdrop-blur-md rounded-lg p-4 border border-sage-500">
                  <div className="text-3xl font-bold text-green-700 mb-2">5+</div>
                  <div className="text-sage-800">Years in Coffee</div>
                </div>
                <div className="bg-sage-50/90 backdrop-blur-md rounded-lg p-4 border border-sage-500">
                  <div className="text-3xl font-bold text-sage-700 mb-2">10+</div>
                  <div className="text-sage-800">Years in Pastoral Ministry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 text-center mb-16">
            Featured <span className="text-green-700">Work</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Coffee Catering Service',
                description: 'Premium coffee catering for corporate events and special occasions with full barista service',
                tech: ['Customer Service', 'Event Planning', 'Quality Control'],
                color: 'from-green-500 to-sage-600',
                image: '☕' // Add your image path here
              },
              {
                title: 'Retail Cashier Experience',
                description: 'Efficient customer service and transaction management in fast-paced retail environment',
                tech: ['POS Systems', 'Inventory Management', 'Customer Relations'],
                color: 'from-sage-500 to-emerald-600',
                image: '🛒' // Add your image path here
              },
              {
                title: 'Missionary Work Honduras',
                description: 'Community service and youth ministry work building relationships and providing support',
                tech: ['Community Outreach', 'Youth Programs', 'Cultural Exchange'],
                color: 'from-emerald-500 to-green-600',
                image: '🌍' // Add your image path here
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative bg-sage-50/90 backdrop-blur-md rounded-xl overflow-hidden border border-sage-500 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 flex items-center justify-center text-4xl`}>
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sage-800 mb-3">{project.title}</h3>
                  <p className="text-sage-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-100/90 rounded-full text-xs text-sage-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-sage-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 text-center mb-16">
            Technical <span className="text-green-700">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Customer Service', level: 95, color: 'bg-green-500' },
              { name: 'Barista Skills', level: 90, color: 'bg-sage-600' },
              { name: 'Event Planning', level: 85, color: 'bg-emerald-600' },
              { name: 'Retail Operations', level: 88, color: 'bg-green-600' },
              { name: 'Community Outreach', level: 80, color: 'bg-sage-500' },
              { name: 'Bilingual Communication', level: 75, color: 'bg-emerald-500' }
            ].map((skill, index) => (
              <div className="bg-sage-100/60 backdrop-blur-md rounded-2xl p-6 border border-sage-300/50 shadow-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-sage-800 font-semibold">{skill.name}</span>
                  <span className="text-sage-700">{skill.level}%</span>
                </div>
                <div className="w-full bg-sage-300 rounded-full h-3">
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
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 text-center mb-16">
            Get In <span className="text-green-700">Touch</span>
          </h2>
          <div className="bg-sage-100/60 backdrop-blur-md rounded-2xl p-8 border border-sage-300/50 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-sm text-sage-800 font-semibold mb-1">Contact Me</div>
              <div className="text-xs text-sage-600">Let's connect and discuss opportunities</div>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/80 border border-sage-300 rounded-lg text-sage-800 placeholder-sage-500 focus:outline-none focus:border-green-600 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/80 border border-sage-300 rounded-lg text-sage-800 placeholder-sage-500 focus:outline-none focus:border-green-600 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-white/80 border border-sage-300 rounded-lg text-sage-800 placeholder-sage-500 focus:outline-none focus:border-green-600 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-white/80 border border-sage-300 rounded-lg text-sage-800 placeholder-sage-500 focus:outline-none focus:border-green-600 transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-700 to-sage-800 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-8 flex justify-center space-x-6">
              {['GitHub', 'LinkedIn', 'Twitter', 'YouTube'].map((social, index) => (
                <button
                  key={index}
                  className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center text-sage-700 hover:bg-green-100 hover:text-green-600 transition-colors"
                  onClick={() => {
                    if (social === 'YouTube') {
                      window.open('https://www.youtube.com/@SelgaStudios', '_blank')
                    }
                  }}
                >
                  {social === 'GitHub' && '🐙'}
                  {social === 'LinkedIn' && '💼'}
                  {social === 'Twitter' && '🐦'}
                  {social === 'YouTube' && '📺'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sage-600 border-t border-sage-300">
        <p>&copy; 2024 Alexander Selga. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  )
}
