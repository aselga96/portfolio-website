import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DirectorySideBar from '../components/DirectorySideBar'
import { useAuth } from '../contexts/AuthContext'

export default function Projects() {
  const { isAuthenticated, isAdmin } = useAuth()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  
  // State for dynamic content
  const [archiveData, setArchiveData] = useState([
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
  ])
  
  const [workExperienceData, setWorkExperienceData] = useState([
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
  ])
  
  const [skillsData, setSkillsData] = useState([
    {
      title: 'Professional Growth',
      description: 'Continuous learning and skill development in customer service, hospitality management, and community engagement through various training programs and hands-on experience.'
    },
    {
      title: 'Technical Expertise',
      description: 'Advanced technical skills and modern methodologies in web development, system architecture, and digital transformation projects.'
    }
  ])
  
  const [personalProjectsData, setPersonalProjectsData] = useState([
    {
      title: 'Creative Endeavors',
      description: 'Personal creative projects and initiatives that showcase innovation, problem-solving abilities, and passion for making a positive impact in various domains.'
    },
    {
      title: 'Community Impact',
      description: 'Community-focused projects and outreach programs that make a positive difference through collaboration, service, and innovative solutions.'
    }
  ])

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedArchiveData = localStorage.getItem('projectsArchiveData')
    const savedWorkData = localStorage.getItem('projectsWorkData')
    const savedSkillsData = localStorage.getItem('projectsSkillsData')
    const savedPersonalData = localStorage.getItem('projectsPersonalData')
    
    if (savedArchiveData) setArchiveData(JSON.parse(savedArchiveData))
    if (savedWorkData) setWorkExperienceData(JSON.parse(savedWorkData))
    if (savedSkillsData) setSkillsData(JSON.parse(savedSkillsData))
    if (savedPersonalData) setPersonalProjectsData(JSON.parse(savedPersonalData))
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('projectsArchiveData', JSON.stringify(archiveData))
    localStorage.setItem('projectsWorkData', JSON.stringify(workExperienceData))
    localStorage.setItem('projectsSkillsData', JSON.stringify(skillsData))
    localStorage.setItem('projectsPersonalData', JSON.stringify(personalProjectsData))
  }, [archiveData, workExperienceData, skillsData, personalProjectsData])

  const handleEditToggle = () => {
    if (isAuthenticated && isAdmin) {
      setIsEditing(!isEditing)
    }
  }

  const handleAddCard = (section) => {
    const newCard = {
      title: 'New Project',
      description: 'Click edit to customize this project',
      ...(section === 'work' && { tech: ['Skill 1', 'Skill 2'] }),
      ...(section === 'archive' && { link: '/new-project' })
    }
    
    switch(section) {
      case 'archive':
        setArchiveData([...archiveData, newCard])
        break
      case 'work':
        setWorkExperienceData([...workExperienceData, newCard])
        break
      case 'skills':
        setSkillsData([...skillsData, newCard])
        break
      case 'personal':
        setPersonalProjectsData([...personalProjectsData, newCard])
        break
    }
  }

  const handleDeleteCard = (section, index) => {
    switch(section) {
      case 'archive':
        setArchiveData(archiveData.filter((_, i) => i !== index))
        break
      case 'work':
        setWorkExperienceData(workExperienceData.filter((_, i) => i !== index))
        break
      case 'skills':
        setSkillsData(skillsData.filter((_, i) => i !== index))
        break
      case 'personal':
        setPersonalProjectsData(personalProjectsData.filter((_, i) => i !== index))
        break
    }
  }

  const handleEditCard = (section, index, field, value) => {
    switch(section) {
      case 'archive':
        const updatedArchive = [...archiveData]
        updatedArchive[index][field] = value
        setArchiveData(updatedArchive)
        break
      case 'work':
        const updatedWork = [...workExperienceData]
        updatedWork[index][field] = value
        setWorkExperienceData(updatedWork)
        break
      case 'skills':
        const updatedSkills = [...skillsData]
        updatedSkills[index][field] = value
        setSkillsData(updatedSkills)
        break
      case 'personal':
        const updatedPersonal = [...personalProjectsData]
        updatedPersonal[index][field] = value
        setPersonalProjectsData(updatedPersonal)
        break
    }
  }
  return (
    <div className="min-h-screen py-24 sm:py-32 px-6 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-gradient-to-br from-midnight-900 via-slate-900 to-blue-950">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-orb-1"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-orb-2 animation-delay-3000"></div>
        <div className="absolute top-20 right-20 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-float-orb-3 animation-delay-5000"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <DirectorySideBar />
        <div className="space-y-20 sm:space-y-24 lg:space-y-28">
          {/* Archive Section */}
          <h2 id="archive" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100 text-center mb-4 sm:mb-6">
            The <span className="bg-gradient-to-r from-royal-400 via-blue-500 to-midnight-400 bg-clip-text text-transparent animate-gradient">Archive</span>
          </h2>
          <div className="space-y-8 sm:space-y-10">
            {archiveData.map((entry, index) => (
              <div
                key={index}
                className={`group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm ${
                  entry.link && !isEditing ? 'cursor-pointer' : ''
                }`}
                onClick={() => entry.link && !isEditing && navigate(entry.link)}
              >
                <div className="flex-1 p-8 sm:p-10 text-left">
                  {isEditing && isAdmin ? (
                    <>
                      <div className="flex justify-between items-start mb-3">
                        <input
                          type="text"
                          value={entry.title}
                          onChange={(e) => handleEditCard('archive', index, 'title', e.target.value)}
                          className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 bg-slate-600 border border-slate-500 rounded px-2 py-1 flex-1"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteCard('archive', index)
                          }}
                          className="ml-3 px-2 py-1 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-xs font-medium rounded transition-colors duration-300"
                        >
                          delete
                        </button>
                      </div>
                      <textarea
                        value={entry.description}
                        onChange={(e) => handleEditCard('archive', index, 'description', e.target.value)}
                        className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 bg-slate-600 border border-slate-500 rounded px-2 py-1 w-full resize-none"
                        rows={2}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <input
                        type="text"
                        value={entry.link || ''}
                        onChange={(e) => handleEditCard('archive', index, 'link', e.target.value)}
                        placeholder="Link (e.g., /new-project)"
                        className="text-xs sm:text-sm text-royal-400 font-medium bg-slate-600 border border-slate-500 rounded px-2 py-1 w-full"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </>
                  ) : (
                    <>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">{entry.title}</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{entry.description}</p>
                      {entry.link && (
                        <div className="text-xs sm:text-sm text-royal-400 font-medium mt-2">Click to explore →</div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
            
            {/* Add New Card Button - Only visible to admins in edit mode */}
            {isEditing && isAdmin && (
              <div
                className="group relative bg-slate-700/50 backdrop-blur-md rounded-xl overflow-hidden border border-dashed border-slate-500/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm cursor-pointer"
                onClick={() => handleAddCard('archive')}
              >
                <div className="flex-1 p-8 sm:p-10 text-center">
                  <div className="text-slate-400 text-sm sm:text-base font-medium mb-2">+ Add New Archive Item</div>
                  <div className="text-slate-500 text-xs">Click to create a new archive entry</div>
                </div>
              </div>
            )}
          </div>
          
          {/* Work Experience Section */}
          <h2 id="work-experience" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100 text-center mb-4 sm:mb-6">
            Work <span className="bg-gradient-to-r from-royal-400 via-blue-500 to-midnight-400 bg-clip-text text-transparent animate-gradient">Experience</span>
          </h2>
          <div className="space-y-8 sm:space-y-10">
            {workExperienceData.map((project, index) => (
              <div
                key={index}
                className="group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm"
              >
                <div className="flex-1 p-8 sm:p-10 text-left">
                  {isEditing && isAdmin ? (
                    <>
                      <div className="flex justify-between items-start mb-3">
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => handleEditCard('work', index, 'title', e.target.value)}
                          className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 bg-slate-600 border border-slate-500 rounded px-2 py-1 flex-1"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteCard('work', index)
                          }}
                          className="ml-3 px-2 py-1 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-xs font-medium rounded transition-colors duration-300"
                        >
                          delete
                        </button>
                      </div>
                      <textarea
                        value={project.description}
                        onChange={(e) => handleEditCard('work', index, 'description', e.target.value)}
                        className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 bg-slate-600 border border-slate-500 rounded px-2 py-1 w-full resize-none"
                        rows={2}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.tech.map((tech, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <input
                              type="text"
                              value={tech}
                              onChange={(e) => {
                                const updatedTech = [...project.tech]
                                updatedTech[i] = e.target.value
                                handleEditCard('work', index, 'tech', updatedTech)
                              }}
                              className="px-3 sm:px-4 py-2 bg-royal-900/80 rounded-full text-xs sm:text-sm text-slate-200 border border-royal-700/50"
                              onClick={(e) => e.stopPropagation()}
                            />
                            {project.tech.length > 1 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  const updatedTech = project.tech.filter((_, techIndex) => techIndex !== i)
                                  handleEditCard('work', index, 'tech', updatedTech)
                                }}
                                className="text-red-400 hover:text-red-300 text-xs"
                              >
                                ×
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            const updatedTech = [...project.tech, 'New Skill']
                            handleEditCard('work', index, 'tech', updatedTech)
                          }}
                          className="px-3 sm:px-4 py-2 bg-royal-600/50 hover:bg-royal-600/70 rounded-full text-xs sm:text-sm text-slate-200 border border-royal-500/50"
                        >
                          + Add Skill
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            ))}
            
            {/* Add New Card Button - Only visible to admins in edit mode */}
            {isEditing && isAdmin && (
              <div
                className="group relative bg-slate-700/50 backdrop-blur-md rounded-xl overflow-hidden border border-dashed border-slate-500/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm cursor-pointer"
                onClick={() => handleAddCard('work')}
              >
                <div className="flex-1 p-8 sm:p-10 text-center">
                  <div className="text-slate-400 text-sm sm:text-base font-medium mb-2">+ Add New Work Experience</div>
                  <div className="text-slate-500 text-xs">Click to create a new work experience entry</div>
                </div>
              </div>
            )}
          </div>

          {/* Skills Development Section */}
          <h2 id="skills-development" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100 text-center mb-4 sm:mb-6">
            Skills <span className="bg-gradient-to-r from-royal-400 via-blue-500 to-midnight-400 bg-clip-text text-transparent animate-gradient">Development</span>
          </h2>
          <div className="space-y-8 sm:space-y-10">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm"
              >
                <div className="flex-1 p-8 sm:p-10 text-left">
                  {isEditing && isAdmin ? (
                    <>
                      <div className="flex justify-between items-start mb-3">
                        <input
                          type="text"
                          value={skill.title}
                          onChange={(e) => handleEditCard('skills', index, 'title', e.target.value)}
                          className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 bg-slate-600 border border-slate-500 rounded px-2 py-1 flex-1"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteCard('skills', index)
                          }}
                          className="ml-3 px-2 py-1 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-xs font-medium rounded transition-colors duration-300"
                        >
                          delete
                        </button>
                      </div>
                      <textarea
                        value={skill.description}
                        onChange={(e) => handleEditCard('skills', index, 'description', e.target.value)}
                        className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-600 border border-slate-500 rounded px-2 py-1 w-full resize-none"
                        rows={3}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </>
                  ) : (
                    <>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">{skill.title}</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{skill.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
            
            {/* Add New Card Button - Only visible to admins in edit mode */}
            {isEditing && isAdmin && (
              <div
                className="group relative bg-slate-700/50 backdrop-blur-md rounded-xl overflow-hidden border border-dashed border-slate-500/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm cursor-pointer"
                onClick={() => handleAddCard('skills')}
              >
                <div className="flex-1 p-8 sm:p-10 text-center">
                  <div className="text-slate-400 text-sm sm:text-base font-medium mb-2">+ Add New Skill</div>
                  <div className="text-slate-500 text-xs">Click to create a new skill development entry</div>
                </div>
              </div>
            )}
          </div>

          {/* Personal Projects Section */}
          <h2 id="personal-projects" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100 text-center mb-4 sm:mb-6">
            Personal <span className="bg-gradient-to-r from-royal-400 via-blue-500 to-midnight-400 bg-clip-text text-transparent animate-gradient">Projects</span>
          </h2>
          <div className="space-y-8 sm:space-y-10">
            {personalProjectsData.map((project, index) => (
              <div
                key={index}
                className="group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm"
              >
                <div className="flex-1 p-8 sm:p-10 text-left">
                  {isEditing && isAdmin ? (
                    <>
                      <div className="flex justify-between items-start mb-3">
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => handleEditCard('personal', index, 'title', e.target.value)}
                          className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 bg-slate-600 border border-slate-500 rounded px-2 py-1 flex-1"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteCard('personal', index)
                          }}
                          className="ml-3 px-2 py-1 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-xs font-medium rounded transition-colors duration-300"
                        >
                          delete
                        </button>
                      </div>
                      <textarea
                        value={project.description}
                        onChange={(e) => handleEditCard('personal', index, 'description', e.target.value)}
                        className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-600 border border-slate-500 rounded px-2 py-1 w-full resize-none"
                        rows={3}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </>
                  ) : (
                    <>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
            
            {/* Add New Card Button - Only visible to admins in edit mode */}
            {isEditing && isAdmin && (
              <div
                className="group relative bg-slate-700/50 backdrop-blur-md rounded-xl overflow-hidden border border-dashed border-slate-500/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm cursor-pointer"
                onClick={() => handleAddCard('personal')}
              >
                <div className="flex-1 p-8 sm:p-10 text-center">
                  <div className="text-slate-400 text-sm sm:text-base font-medium mb-2">+ Add New Personal Project</div>
                  <div className="text-slate-500 text-xs">Click to create a new personal project entry</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Edit Button - Bottom of Page */}
      {isAuthenticated && isAdmin && (
        <div className="fixed bottom-8 right-8 z-30">
          <button
            onClick={handleEditToggle}
            className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-300 shadow-lg ${
              isEditing 
                ? 'bg-royal-600 hover:bg-royal-700 text-slate-100' 
                : 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300'
            }`}
          >
            {isEditing ? 'Done Editing' : 'Edit'}
          </button>
        </div>
      )}
    </div>
  )
}
