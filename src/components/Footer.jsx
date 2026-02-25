import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from './AuthModal'

export default function Footer() {
  const { user, isAuthenticated, isAdmin, login, logout } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleAuthClick = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true)
    }
  }

  return (
    <>
      {/* Footer with Consolidated Auth Controls */}
      <footer className="bg-slate-900/95 backdrop-blur-md border-t border-slate-700 py-8 sm:py-6 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-slate-300 text-sm sm:text-xs font-medium">
                © {currentYear} Alexander Selga. All rights reserved.
              </p>
            </div>
            
            {/* Consolidated Authentication Controls */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3 text-center">
              {isAuthenticated && isAdmin && (
                <div className="flex items-center gap-2 sm:gap-2">
                  <span className="text-xs text-slate-400">Welcome, {user.name}</span>
                  <button
                    onClick={logout}
                    className="px-3 py-1.5 sm:py-1 bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 text-xs font-medium rounded transition-colors duration-300"
                  >
                    logout
                  </button>
                </div>
              )}
              
              <button
                onClick={handleAuthClick}
                className={`px-5 py-2.5 sm:px-4 sm:py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
                  isAuthenticated && isAdmin
                    ? 'bg-royal-600 hover:bg-royal-700 text-slate-100'
                    : 'bg-slate-800/30 hover:bg-slate-700/30 text-slate-500 hover:text-slate-400'
                }`}
              >
                {isAuthenticated && isAdmin ? 'admin' : 'login'}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)} 
          onSuccess={() => {
            setShowAuthModal(false)
          }}
        />
      )}
    </>
  )
}
