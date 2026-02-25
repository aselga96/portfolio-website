import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import DirectorySideBar from '../components/DirectorySideBar'
import AuthModal from '../components/AuthModal'
import DeletedItemsManager from '../components/DeletedItemsManager'
import { useAuth } from '../contexts/AuthContext'

export default function JournalEntries() {
  const { user, isAuthenticated, isAdmin, login, logout } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [journalData, setJournalData] = useState(() => {
    // Clear old localStorage data and use sample journal entries
    localStorage.removeItem('journalData')
    return [
      {
        title: 'A New Beginning',
        description: 'Starting fresh with new perspectives and embracing the journey ahead with open heart and mind.',
        date: 'March 15, 2024',
        link: '/journal-entries/a-new-beginning',
        content: 'Today marks the beginning of a new chapter in my life. As I sit here reflecting on the past few months, I realize how much growth has occurred. The challenges I faced seemed insurmountable at times, but each one taught me valuable lessons about resilience and perseverance.\n\nI\'ve learned that true strength isn\'t about never falling, but about getting back up every time we fall. It\'s about finding courage in the face of uncertainty and trusting that everything happens for a reason.\n\nMoving forward, I\'m committed to embracing change with grace and maintaining a positive outlook, no matter what obstacles come my way.'
      },
      {
        title: 'Lessons from Nature',
        description: 'Finding wisdom in the natural world and discovering how much we can learn from observing the cycles of life.',
        date: 'March 10, 2024',
        link: '/journal-entries/lessons-from-nature',
        content: 'Spending time in nature has always been a source of inspiration and clarity for me. Yesterday, I watched a spider carefully weaving its web, each thread placed with precision and purpose. It reminded me of how we too must be deliberate in building our lives.\n\nThe changing seasons teach us about impermanence and the beauty of letting go. Just as trees shed their leaves in autumn, we too must release what no longer serves us to make room for new growth.\n\nNature operates on its own timeline, never rushing, never questioning. There\'s a profound lesson in that patience and trust in the process.'
      },
      {
        title: 'The Power of Connection',
        description: 'Exploring the importance of meaningful relationships and how they shape our journey through life.',
        date: 'March 5, 2024',
        link: '/journal-entries/the-power-of-connection',
        content: 'This week I had several conversations that reminded me of the profound impact human connection has on our wellbeing. In a world that often feels disconnected, these moments of genuine understanding and shared experience are precious.\n\nI\'ve noticed that the most meaningful relationships aren\'t always the easiest. Sometimes they require difficult conversations, vulnerability, and the courage to be truly seen. But the rewards - trust, intimacy, mutual growth - are immeasurable.\n\nIt\'s easy to get caught up in the busyness of life and forget to nurture these connections. I\'m making a commitment to reach out more regularly, to listen more deeply, and to show up fully for the people who matter most.'
      }
    ]
  })

  const handleJournalEdit = (index, field, value) => {
    const updatedData = [...journalData]
    updatedData[index][field] = value
    setJournalData(updatedData)
    // Save to localStorage for persistence
    localStorage.setItem('journalData', JSON.stringify(updatedData))
  }

  const handleCardClick = (journal) => {
    if (!isEditing) {
      if (journal.link) {
        navigate(journal.link)
      }
    }
  }

  const handleBack = () => {
    // Always navigate to Projects page
    navigate('/projects')
  }

  const handleAddCard = () => {
    const newCard = {
      title: 'New Journal Entry',
      description: 'Click edit to customize this journal entry',
      link: `/journal-entries/new-journal-${Date.now()}`
    }
    const updatedData = [...journalData, newCard]
    setJournalData(updatedData)
    // Save to localStorage for persistence
    localStorage.setItem('journalData', JSON.stringify(updatedData))
  }

  const handleDeleteCard = (index) => {
    const updatedData = journalData.filter((_, i) => i !== index)
    setJournalData(updatedData)
    // Save to localStorage for persistence
    localStorage.setItem('journalData', JSON.stringify(updatedData))
    
    // Optional: Mark as deleted in a separate log
    const deletedLog = JSON.parse(localStorage.getItem('deletedJournalEntries') || '[]')
    deletedLog.push({
      item: journalData[index],
      deletedAt: new Date().toISOString(),
      reason: 'admin_delete'
    })
    localStorage.setItem('deletedJournalEntries', JSON.stringify(deletedLog))
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
        <div className="absolute top-10 left-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-1"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-2 animation-delay-3000"></div>
        <div className="absolute top-20 right-20 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float-orb-3 animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <DirectorySideBar />
        
        <div className="lg:col-span-3 space-y-16 sm:space-y-20 lg:space-y-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="text-royal-400">Journal Entries</span>
          </h1>
          
          <div className="space-y-6 sm:space-y-8">
            {journalData.map((journal, index) => (
              <div
                key={index}
                className={`group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm ${
                  !isEditing && 'cursor-pointer'
                }`}
                onClick={() => handleCardClick(journal)}
              >
                <div className="flex-1 p-4 sm:p-6 text-left">
                  {isEditing && isAdmin ? (
                    <>
                      <div className="flex justify-between items-start mb-3">
                        <input
                          type="text"
                          value={journal.title}
                          onChange={(e) => handleJournalEdit(index, 'title', e.target.value)}
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
                        value={journal.description}
                        onChange={(e) => handleJournalEdit(index, 'description', e.target.value)}
                        className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 bg-slate-600 border border-slate-500 rounded px-2 py-1 w-full resize-none"
                        rows={2}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <input
                        type="text"
                        value={journal.date}
                        onChange={(e) => handleJournalEdit(index, 'date', e.target.value)}
                        className="text-xs sm:text-sm text-royal-400 font-medium bg-slate-600 border border-slate-500 rounded px-2 py-1 w-full"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </>
                  ) : (
                    <>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">{journal.title}</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">{journal.description}</p>
                      <div className="text-xs sm:text-sm text-slate-400 italic mb-2">{journal.date}</div>
                    </>
                  )}
                  <div className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                    journal.status === 'uncreated' 
                      ? 'text-slate-500 italic' 
                      : 'text-royal-400 hover:text-royal-300'
                  }`}>
                    {journal.status === 'uncreated' ? 'Page not created yet' : 'Click to explore →'}
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
                  <div className="text-slate-400 text-sm sm:text-base font-medium mb-2">+ Add New Journal Entry</div>
                  <div className="text-slate-500 text-xs">Click to create a new journal entry</div>
                </div>
              </div>
            )}
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={handleBack}
              className="inline-flex items-center px-8 py-3 bg-royal-600 hover:bg-royal-700 text-slate-100 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </button>
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
