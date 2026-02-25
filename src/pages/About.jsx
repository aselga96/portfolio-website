import { useState } from 'react'
import profileImage from '../assets/profile.jpg'
import { useAuth } from '../contexts/AuthContext'

export default function About() {
  const { user, isAuthenticated, isAdmin } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [editableContent, setEditableContent] = useState({
    name: 'Alexander Selga',
    title: 'Hospitality Professional & Minister',
    description1: "I'm a passionate hospitality professional with over 5 years of experience in barista services, coffee catering, and customer relations. I love creating exceptional experiences through quality service and attention to detail, bringing warmth and excellence to every interaction.",
    description2: "My journey extends beyond hospitality into meaningful ministry work. I've dedicated over 10 years to pastoral ministry, serving as a missionary with Life Teen and focusing on youth outreach and spiritual guidance. This included a transformative summer in 2022 serving in Dahlonega, Georgia, and earlier in July 2019, when I served with the Missioners of Christ in Honduras, experiencing powerful cross-cultural ministry. These experiences, combined with my background in retail, have shaped my ability to create welcoming environments and build lasting relationships in every context."
  })

  const handleEditToggle = () => {
    if (isAuthenticated && isAdmin) {
      setIsEditing(!isEditing)
    }
  }

  const handleContentEdit = (field, value) => {
    setEditableContent(prev => ({
      ...prev,
      [field]: value
    }))
  }
  return (
    <div className="min-h-screen py-24 sm:py-32 px-6 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-midnight-900 to-blue-950">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 - Top Left */}
        <div className="absolute top-10 left-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-1"></div>
        
        {/* Orb 2 - Top Right */}
        <div className="absolute top-20 right-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-2 animation-delay-2000"></div>
        
        {/* Orb 3 - Bottom Right */}
        <div className="absolute bottom-10 right-20 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float-orb-3 animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100 text-center mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-royal-400 via-blue-500 to-midnight-400 bg-clip-text text-transparent animate-gradient">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-slate-800/60 backdrop-blur-xl rounded-3xl p-12 sm:p-16 lg:p-20 border border-slate-600/30 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Profile Image Section */}
            <div className="relative lg:w-1/2">
              <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem]">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-royal-500/50 shadow-2xl relative z-10">
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-royal-600 to-blue-600 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-royal-500 to-midnight-600 rounded-full blur-2xl opacity-40"></div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="lg:w-1/2 space-y-8">
              <div className="text-center lg:text-left">
                {isEditing && isAdmin ? (
                  <input
                    type="text"
                    value={editableContent.name}
                    onChange={(e) => handleContentEdit('name', e.target.value)}
                    className="text-2xl sm:text-3xl font-bold text-slate-100 bg-slate-600 border border-slate-500 rounded px-3 py-2 mb-4 w-full"
                  />
                ) : (
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">{editableContent.name}</h3>
                )}
                {isEditing && isAdmin ? (
                  <input
                    type="text"
                    value={editableContent.title}
                    onChange={(e) => handleContentEdit('title', e.target.value)}
                    className="text-royal-300 font-medium mb-8 bg-slate-600 border border-slate-500 rounded px-3 py-2 w-full"
                  />
                ) : (
                  <p className="text-royal-300 font-medium mb-8">{editableContent.title}</p>
                )}
              </div>
              
              <div className="space-y-8 text-slate-300 leading-relaxed">
                {isEditing && isAdmin ? (
                  <>
                    <textarea
                      value={editableContent.description1}
                      onChange={(e) => handleContentEdit('description1', e.target.value)}
                      className="text-base sm:text-lg leading-relaxed bg-slate-600 border border-slate-500 rounded px-3 py-2 w-full resize-none"
                      rows={3}
                    />
                    <textarea
                      value={editableContent.description2}
                      onChange={(e) => handleContentEdit('description2', e.target.value)}
                      className="text-base sm:text-lg leading-relaxed bg-slate-600 border border-slate-500 rounded px-3 py-2 w-full resize-none"
                      rows={3}
                    />
                  </>
                ) : (
                  <>
                    <p className="text-base sm:text-lg">
                      {editableContent.description1}
                    </p>
                    <p className="text-base sm:text-lg">
                      {editableContent.description2}
                    </p>
                  </>
                )}
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-royal-600/20 to-blue-600/20 backdrop-blur-md rounded-xl p-8 border border-royal-500/30 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-royal-300 mb-2">5+</div>
                  <div className="text-slate-200 font-medium">Years in Coffee</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-midnight-600/20 backdrop-blur-md rounded-xl p-8 border border-blue-500/30 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-2">10+</div>
                  <div className="text-slate-200 font-medium">Years in Ministry</div>
                </div>
              </div>
            </div>
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
