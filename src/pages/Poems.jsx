import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DirectorySideBar from '../components/DirectorySideBar'
import AuthModal from '../components/AuthModal'
import DeletedItemsManager from '../components/DeletedItemsManager'
import { useAuth } from '../contexts/AuthContext'

export default function Poems() {
  const { user, isAuthenticated, isAdmin, login, logout } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const navigate = useNavigate()
  const [poemsData, setPoemsData] = useState(() => {
    // Load from localStorage or use default uncreated cards
    const savedData = localStorage.getItem('poemsData')
    if (savedData) {
      return JSON.parse(savedData)
    }
    return [
      {
        title: 'Spiritual Reflections',
        description: 'Finding faith in the storm, hearing divine whispers, building altars in ordinary places.',
        link: null, // No individual page
        status: 'uncreated'
      },
      {
        title: 'Nature\'s Wisdom',
        description: 'Forest patience, ocean changes, mountain strength through perseverance.',
        link: null, // No individual page
        status: 'uncreated'
      },
      {
        title: 'Human Connection',
        description: 'Coffee conversations, being truly seen, community garden bonds.',
        link: null, // No individual page
        status: 'uncreated'
      },
      {
        title: 'Hope and Renewal',
        description: 'Morning light after dark nights, spring\'s rebellion, flowers through concrete.',
        link: null, // No individual page
        status: 'uncreated'
      }
    ]
  })

  const handlePoemEdit = (index, field, value) => {
    const updatedData = [...poemsData]
    updatedData[index][field] = value
    setPoemsData(updatedData)
    // Save to localStorage for persistence
    localStorage.setItem('poemsData', JSON.stringify(updatedData))
  }

  const handleCardClick = (poem) => {
    if (!isEditing) {
      if (poem.status === 'uncreated') {
        alert('This poem page has not been created yet.')
      } else if (poem.link) {
        navigate(poem.link)
      }
    }
  }

  const handleAddCard = () => {
    const newCard = {
      title: 'New Poem',
      description: 'Click edit to customize this poem card',
      link: `/poems/new-poem-${Date.now()}`
    }
    const updatedData = [...poemsData, newCard]
    setPoemsData(updatedData)
    // Save to localStorage for persistence
    localStorage.setItem('poemsData', JSON.stringify(updatedData))
  }

  const handleDeleteCard = (index) => {
    const updatedData = poemsData.filter((_, i) => i !== index)
    setPoemsData(updatedData)
    // Save to localStorage for persistence
    localStorage.setItem('poemsData', JSON.stringify(updatedData))
    
    // Optional: Mark as deleted in a separate log
    const deletedLog = JSON.parse(localStorage.getItem('deletedPoems') || '[]')
    deletedLog.push({
      item: poemsData[index],
      deletedAt: new Date().toISOString(),
      reason: 'admin_delete'
    })
    localStorage.setItem('deletedPoems', JSON.stringify(deletedLog))
  }

  const handleEditToggle = () => {
    if (isAuthenticated && isAdmin) {
      setIsEditing(!isEditing)
    } else {
      setShowAuthModal(true)
    }
  }

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-midnight-900 via-slate-900 to-blue-950">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-orb-1"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-orb-2 animation-delay-3000"></div>
        <div className="absolute top-20 right-20 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-float-orb-3 animation-delay-5000"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <DirectorySideBar />
        
        <div className="lg:col-span-3 space-y-16 sm:space-y-20 lg:space-y-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="text-royal-400">Poems</span>
          </h1>
          
          <div className="space-y-6 sm:space-y-8">
            {poemsData.map((poem, index) => (
              <div
                key={index}
                className={`group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm ${
                  !isEditing && 'cursor-pointer'
                }`}
                onClick={() => handleCardClick(poem)}
              >
                <div className="flex-1 p-4 sm:p-6 text-left">
                  {isEditing && isAdmin ? (
                    <>
                      <div className="flex justify-between items-start mb-3">
                        <input
                          type="text"
                          value={poem.title}
                          onChange={(e) => handlePoemEdit(index, 'title', e.target.value)}
                          className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 bg-slate-600 border border-slate-500 rounded px-2 py-1 flex-1"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteCard(index)
                          }}
                          className="ml-3 px-2 py-1 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-xs font-medium rounded transition-colors duration-300"
                        >
                          delete
                        </button>
                      </div>
                      <textarea
                        value={poem.description}
                        onChange={(e) => handlePoemEdit(index, 'description', e.target.value)}
                        className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 bg-slate-600 border border-slate-500 rounded px-2 py-1 w-full resize-none"
                        rows={2}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </>
                  ) : (
                    <>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">{poem.title}</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">{poem.description}</p>
                    </>
                  )}
                  <div className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                    poem.status === 'uncreated' 
                      ? 'text-slate-500 italic' 
                      : 'text-royal-400 hover:text-royal-300'
                  }`}>
                    {poem.status === 'uncreated' ? 'Page not created yet' : 'Click to explore →'}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Add New Card Button - Only visible to admins in edit mode */}
            {isEditing && isAdmin && (
              <div
                className="group relative bg-slate-700/50 backdrop-blur-md rounded-xl overflow-hidden border border-dashed border-slate-500/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm cursor-pointer"
                onClick={handleAddCard}
              >
                <div className="flex-1 p-6 sm:p-8 text-center">
                  <div className="text-slate-400 text-sm sm:text-base font-medium mb-2">+ Add New Poem Card</div>
                  <div className="text-slate-500 text-xs">Click to create a new poem card</div>
                </div>
              </div>
            )}
          </div>
          
          <div className="text-center mt-16 space-x-4">
            <Link 
              to="/"
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-royal-600 hover:bg-royal-700 text-slate-100 font-medium rounded-lg transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Discreet Admin Controls */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {isAuthenticated && isAdmin && (
              <>
                <span className="text-xs text-slate-400">Welcome, {user.name}</span>
                <button
                  onClick={logout}
                  className="px-3 py-1 bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 text-xs font-medium rounded transition-colors duration-300"
                >
                  logout
                </button>
              </>
            )}
            <button
              onClick={handleEditToggle}
              className="px-3 py-1 bg-slate-800/30 hover:bg-slate-700/30 text-slate-500 text-xs font-medium rounded transition-colors duration-300"
            >
              {isEditing ? 'save' : isAuthenticated && isAdmin ? 'edit' : 'login'}
            </button>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)} 
          onSuccess={() => {
            setShowAuthModal(false)
            setIsEditing(true)
          }}
        />
      )}

      {/* Deleted Items Manager */}
      <DeletedItemsManager />
    </div>
  )
}
