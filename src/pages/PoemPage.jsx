import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import DirectorySideBar from '../components/DirectorySideBar'
import { useAuth } from '../contexts/AuthContext'

export default function PoemPage() {
  const { poemId } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated, isAdmin } = useAuth()
  const [poem, setPoem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({})

  useEffect(() => {
    // Get poems data from localStorage or use sample data
    const savedData = localStorage.getItem('poemsData')
    let poemsData = []
    
    if (savedData) {
      poemsData = JSON.parse(savedData)
    } else {
      // Use sample data if no localStorage data
      poemsData = [
        {
          title: 'Morning Reflections',
          description: 'A quiet moment at dawn, watching the world wake up with gentle light and new possibilities.',
          date: 'March 18, 2024',
          link: '/poems/morning-reflections',
          content: 'The world awakens in gentle light,\nDew drops sparkle, bright and white.\nMorning whispers soft and low,\nWhere the gentle breezes blow.\n\nIn this quiet, peaceful space,\nTime finds its own gentle pace.\nNature\'s symphony begins,\nAs the new day softly spins.'
        },
        {
          title: 'Ocean Dreams',
          description: 'Waves crashing against the shore, carrying stories from distant shores and deep waters.',
          date: 'March 12, 2024',
          link: '/poems/ocean-dreams',
          content: 'Waves dance upon the shore,\nTelling tales of yore and more.\nSalt and spray, a sweet perfume,\nBeneath the silver moon\'s soft bloom.\n\nOcean deep, mysteries keep,\nWhile the ancient waters sleep.\nCurrents strong, yet gentle flow,\nTaking dreams where they may go.'
        },
        {
          title: 'Mountain Silence',
          description: 'Standing tall among ancient peaks, finding peace in the solitude and strength of stone.',
          date: 'March 8, 2024',
          link: '/poems/mountain-silence',
          content: 'Mountains rise in silent grace,\nTouching sky, they find their place.\nAncient stone and weathered face,\nStanding strong through time and space.\n\nIn their shadow, peace I find,\nQuiet moments for the mind.\nNature\'s cathedral, tall and grand,\nAcross this sacred, silent land.'
        }
      ]
    }

    // Find the poem by ID
    const foundPoem = poemsData.find(p => p.link === `/poems/${poemId}`)
    setPoem(foundPoem)
    setEditData(foundPoem || {})
    setLoading(false)
  }, [poemId])

  const handleBack = () => {
    navigate('/poems')
  }

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      const savedData = localStorage.getItem('poemsData')
      let poemsData = savedData ? JSON.parse(savedData) : []
      
      const updatedData = poemsData.map(p => 
        p.link === `/poems/${poemId}` ? editData : p
      )
      
      localStorage.setItem('poemsData', JSON.stringify(updatedData))
      setPoem(editData)
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
            <p className="text-slate-300">Loading poem...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!poem) {
    return (
      <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-midnight-900 via-slate-900 to-blue-950">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-8">Poem Not Found</h1>
            <p className="text-slate-300 mb-8">Sorry, this poem could not be found.</p>
            <button 
              onClick={handleBack}
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-royal-600 hover:bg-royal-700 text-slate-100 font-medium rounded-lg transition-colors duration-300"
            >
              ← Back to Poems
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
          {/* Poem Header */}
          <div className="text-center">
            {isEditing ? (
              <input
                type="text"
                value={editData.title}
                onChange={(e) => handleEditChange('title', e.target.value)}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-center w-full max-w-2xl"
              />
            ) : (
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
                {poem.title}
              </h1>
            )}
            
            {isEditing ? (
              <input
                type="text"
                value={editData.date || ''}
                onChange={(e) => handleEditChange('date', e.target.value)}
                className="text-slate-400 text-sm bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-center max-w-md mx-auto mb-4"
                placeholder="Add date..."
              />
            ) : (
              <p className="text-slate-400 text-sm mb-6">{poem.date}</p>
            )}
            
            {isEditing ? (
              <textarea
                value={editData.description}
                onChange={(e) => handleEditChange('description', e.target.value)}
                className="w-full text-slate-300 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-center max-w-2xl mx-auto"
                rows="2"
              />
            ) : (
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                {poem.description}
              </p>
            )}
          </div>

          {/* Poem Content */}
          <div className="bg-slate-700/90 backdrop-blur-md rounded-xl p-8 sm:p-12 border border-slate-400/50 shadow-sm">
            {isEditing ? (
              <textarea
                value={editData.content}
                onChange={(e) => handleEditChange('content', e.target.value)}
                className="w-full h-96 text-slate-100 text-lg leading-relaxed bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 resize-none font-serif"
              />
            ) : (
              <div className="prose prose-invert max-w-none">
                <pre className="text-slate-100 text-lg sm:text-xl leading-relaxed font-serif whitespace-pre-wrap text-center">
                  {poem.content}
                </pre>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <button 
                onClick={handleBack}
                className="inline-flex items-center px-8 py-3 bg-royal-600 hover:bg-royal-700 text-slate-100 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Poems
              </button>
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
