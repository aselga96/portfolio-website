import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import DirectorySideBar from '../components/DirectorySideBar'
import { useAuth } from '../contexts/AuthContext'

export default function JournalEntryPage() {
  const { entryId } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated, isAdmin } = useAuth()
  const [journal, setJournal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({})

  useEffect(() => {
    // Get journal data from localStorage or use sample data
    const savedData = localStorage.getItem('journalData')
    let journalData = []
    
    if (savedData) {
      journalData = JSON.parse(savedData)
    } else {
      // Use sample data if no localStorage data
      journalData = [
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
    }

    // Find the journal entry by ID
    const foundJournal = journalData.find(j => j.link === `/journal-entries/${entryId}`)
    setJournal(foundJournal)
    setEditData(foundJournal || {})
    setLoading(false)
  }, [entryId])

  const handleBack = () => {
    navigate('/journal-entries')
  }

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      const savedData = localStorage.getItem('journalData')
      let journalData = savedData ? JSON.parse(savedData) : []
      
      const updatedData = journalData.map(j => 
        j.link === `/journal-entries/${entryId}` ? editData : j
      )
      
      localStorage.setItem('journalData', JSON.stringify(updatedData))
      setJournal(editData)
    }
    setIsEditing(!isEditing)
  }

  const handleEditChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (loading) {
    return (
      <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-midnight-900 via-slate-900 to-blue-950">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <p className="text-slate-300">Loading journal entry...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!journal) {
    return (
      <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-midnight-900 via-slate-900 to-blue-950">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-8">Journal Entry Not Found</h1>
            <p className="text-slate-300 mb-8">Sorry, this journal entry could not be found.</p>
            <button 
              onClick={handleBack}
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-royal-600 hover:bg-royal-700 text-slate-100 font-medium rounded-lg transition-colors duration-300"
            >
              ← Back to Journal Entries
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-midnight-900 via-slate-900 to-blue-950">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-orb-1"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-orb-2 animation-delay-3000"></div>
        <div className="absolute top-20 right-20 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-float-orb-3 animation-delay-5000"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <DirectorySideBar />
        
        <div className="space-y-8">
          {/* Journal Entry Header */}
          <div className="text-center">
            {isEditing ? (
              <input
                type="text"
                value={editData.title}
                onChange={(e) => handleEditChange('title', e.target.value)}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-center w-full max-w-2xl"
              />
            ) : (
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-6">
                {journal.title}
              </h1>
            )}
            
            {isEditing ? (
              <div className="space-y-4 max-w-2xl mx-auto">
                <textarea
                  value={editData.description}
                  onChange={(e) => handleEditChange('description', e.target.value)}
                  className="w-full text-slate-300 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-center"
                  rows="2"
                />
                <input
                  type="text"
                  value={editData.date}
                  onChange={(e) => handleEditChange('date', e.target.value)}
                  className="text-slate-300 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-center w-full"
                />
              </div>
            ) : (
              <>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-4">
                  {journal.description}
                </p>
                <p className="text-slate-400 text-sm">{journal.date}</p>
              </>
            )}
          </div>

          {/* Journal Content */}
          <div className="bg-slate-700/90 backdrop-blur-md rounded-xl p-8 sm:p-12 border border-slate-400/50 shadow-sm">
            {isEditing ? (
              <textarea
                value={editData.content}
                onChange={(e) => handleEditChange('content', e.target.value)}
                className="w-full h-96 text-slate-100 text-lg leading-relaxed bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 resize-none"
              />
            ) : (
              <div className="prose prose-invert max-w-none">
                <div className="text-slate-100 text-lg leading-relaxed whitespace-pre-wrap">
                  {journal.content}
                </div>
              </div>
            )}
          </div>

          {/* Navigation and Controls */}
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <button 
                onClick={handleBack}
                className="inline-flex items-center px-8 py-3 bg-royal-600 hover:bg-royal-700 text-slate-100 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Journal Entries
              </button>
              {isAuthenticated && isAdmin && (
                <button
                  onClick={handleEditToggle}
                  className={`inline-flex items-center px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    isEditing
                      ? 'bg-green-600 hover:bg-green-700 text-slate-100'
                      : 'bg-slate-700 hover:bg-slate-600 text-slate-100'
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  {isEditing ? 'Save' : 'Edit'}
                </button>
              )}
            </div>
            
            <div className="text-slate-400 text-sm">
              <Link to="/projects" className="hover:text-royal-400 transition-colors">
                ← Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
