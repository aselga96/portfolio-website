import { Link } from 'react-router-dom'
import DirectorySideBar from '../components/DirectorySideBar'

export default function Projects() {
  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-midnight-900 via-slate-900 to-blue-950">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 - Top Left */}
        <div className="absolute top-10 left-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-orb-1"></div>
        
        {/* Orb 2 - Bottom Right */}
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-orb-2 animation-delay-3000"></div>
        
        {/* Orb 3 - Top Right */}
        <div className="absolute top-20 right-20 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-float-orb-3 animation-delay-5000"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <DirectorySideBar />
        
        <div className="lg:col-span-3">
          <h2 id="archive" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 text-center mb-8 sm:mb-12 lg:mb-16">
            The <span className="text-royal-400">Archive</span>
          </h2>
          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            {[
                {
                  title: 'Poems',
                  description: 'Spiritual reflections and creative expressions from missionary work and personal journey',
                  color: 'from-royal-600 to-blue-700'
                },
                {
                  title: 'Journal Entries',
                  description: 'Thoughts on hospitality, customer service excellence, and the art of creating memorable cafe experiences',
                  color: 'from-slate-600 to-royal-700'
                }
              ].map((entry, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 p-4 sm:p-5 text-left">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-2">{entry.title}</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{entry.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 id="work-experience" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 text-center mb-8 sm:mb-12 lg:mb-16">
              Work <span className="text-royal-400">Experience</span>
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  title: 'Coffee Catering Service',
                  description: 'Premium coffee catering for corporate events and special occasions with full barista service',
                  tech: ['Customer Service', 'Event Planning', 'Quality Control'],
                  color: 'from-royal-600 to-midnight-700'
                },
                {
                  title: 'Retail Cashier Experience',
                  description: 'Efficient customer service and transaction management in fast-paced retail environment',
                  tech: ['POS Systems', 'Inventory Management', 'Customer Relations'],
                  color: 'from-slate-700 to-blue-800'
                },
                {
                  title: 'Missionary Work Honduras',
                  description: 'Community service and youth ministry work building relationships and providing support',
                  tech: ['Community Outreach', 'Youth Programs', 'Cultural Exchange'],
                  color: 'from-blue-700 to-royal-800'
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className={`h-32 sm:h-auto sm:w-32 lg:w-40 bg-gradient-to-br ${project.color} opacity-80`}>
                    </div>
                    <div className="flex-1 p-4 sm:p-5">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-1 bg-royal-900/80 rounded-full text-xs sm:text-sm text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}
