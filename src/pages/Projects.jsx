import { Link } from 'react-router-dom'
import DirectorySideBar from '../components/DirectorySideBar'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-midnight-900 via-slate-900 to-blue-950">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-orb-1"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-orb-2 animation-delay-3000"></div>
        <div className="absolute top-20 right-20 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-float-orb-3 animation-delay-5000"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <DirectorySideBar />
          
          <div className="lg:col-span-3 space-y-16 sm:space-y-20 lg:space-y-24">
          {/* Archive Section */}
          <h2 id="archive" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 text-center mb-12 sm:mb-16 lg:mb-20">
            The <span className="text-royal-400">Archive</span>
          </h2>
          <div className="space-y-8 sm:space-y-10">
            {[
              {
                title: 'Poems',
                description: 'Spiritual reflections and creative expressions from personal journey',
                link: '/poems'
              },
              {
                title: 'Journal Entries',
                description: 'Personal thoughts on daily life, growth, and meaningful moments',
                link: '/journal-entries'
              }
            ].map((entry, index) => (
              <div
                key={index}
                className={`group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm ${
                  entry.link ? 'cursor-pointer' : ''
                }`}
                onClick={() => entry.link && navigate(entry.link)}
              >
                <div className="flex-1 p-6 sm:p-8 text-left">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">{entry.title}</h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{entry.description}</p>
                  {entry.link && (
                    <div className="text-xs sm:text-sm text-royal-400 font-medium mt-2">Click to explore →</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Work Experience Section */}
          <h2 id="work-experience" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 text-center mb-12 sm:mb-16 lg:mb-20">
            Work <span className="text-royal-400">Experience</span>
          </h2>
          <div className="space-y-8 sm:space-y-10">
            {[
              {
                title: 'Coffee Catering Service',
                description: 'Premium coffee catering for corporate events and special occasions with full barista service',
                tech: ['Customer Service', 'Event Planning', 'Quality Control']
              },
              {
                title: 'Retail Cashier Experience',
                description: 'Efficient customer service and transaction management in fast-paced retail environment',
                tech: ['POS Systems', 'Inventory Management', 'Customer Relations']
              },
              {
                title: 'Missionary Work Honduras',
                description: 'Community service and youth ministry work building relationships and providing support',
                tech: ['Community Outreach', 'Youth Programs', 'Cultural Exchange']
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm"
              >
                <div className="flex-1 p-6 sm:p-8 text-left">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-2 bg-royal-900/80 rounded-full text-xs sm:text-sm text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Development Section */}
          <h2 id="skills-development" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 text-center mb-12 sm:mb-16 lg:mb-20">
            Skills <span className="text-royal-400">Development</span>
          </h2>
          <div className="space-y-8 sm:space-y-10">
            <div
              className="group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm"
            >
              <div className="flex-1 p-6 sm:p-8 text-left">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">Professional Growth</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">Continuous learning and skill development in customer service, hospitality management, and community engagement through various training programs and hands-on experience.</p>
              </div>
            </div>
            <div
              className="group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm"
            >
              <div className="flex-1 p-6 sm:p-8 text-left">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">Technical Expertise</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">Advanced technical skills and modern methodologies in web development, system architecture, and digital transformation projects.</p>
              </div>
            </div>
          </div>

          {/* Personal Projects Section */}
          <h2 id="personal-projects" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 text-center mb-12 sm:mb-16 lg:mb-20">
            Personal <span className="text-royal-400">Projects</span>
          </h2>
          <div className="space-y-8 sm:space-y-10">
            <div
              className="group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm"
            >
              <div className="flex-1 p-6 sm:p-8 text-left">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">Creative Endeavors</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">Personal creative projects and initiatives that showcase innovation, problem-solving abilities, and passion for making a positive impact in various domains.</p>
              </div>
            </div>
            <div
              className="group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm"
            >
              <div className="flex-1 p-6 sm:p-8 text-left">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">Community Impact</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">Community-focused projects and outreach programs that make a positive difference through collaboration, service, and innovative solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
