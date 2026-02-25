import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthModal from '../components/AuthModal'
import DeletedItemsManager from '../components/DeletedItemsManager'
import { useAuth } from '../contexts/AuthContext'

export default function SpiritualReflections() {
  const { user, isAuthenticated, isAdmin, login, logout } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const navigate = useNavigate()

  const poem = {
    title: 'Spiritual Reflections',
    content: `Finding faith in the storm,
When thunder rolls and lightning strikes,
There's a whisper in the wind,
A promise that everything will be alright.

Building altars in ordinary places,
The kitchen table becomes sacred ground,
Morning coffee becomes communion,
Every breath becomes a prayer.

Divine whispers in the chaos,
In the middle of the storm,
When everything seems to be falling apart,
There's a voice that says "I am here."

Finding peace in the turmoil,
When the world is spinning around,
There's a stillness in the center,
A place where God can be found.

Spiritual reflections in the mirror,
Seeing the divine in ourselves,
Recognizing that we are holy,
Created in the image of love.`
  }

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-1"></div>
        <div className="absolute top-20 right-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-2 animation-delay-2000"></div>
        <div className="absolute bottom-10 right-20 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float-orb-3 animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-slate-800/95 backdrop-blur-md border border-slate-600 rounded-2xl shadow-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
              {poem.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-royal-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-slate-300 leading-relaxed text-lg font-serif">
              {poem.content}
            </div>
          </div>
          
          <div className="text-center mt-12 space-x-4">
            <Link 
              to="/poems"
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-royal-600 hover:bg-royal-700 text-slate-100 font-medium rounded-lg transition-colors duration-300"
            >
              ← Back to Poems
            </Link>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </div>
  )
}
