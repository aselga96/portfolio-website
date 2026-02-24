import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function UserProfile() {
  const { user, logout, updateUserPreferences } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [preferences, setPreferences] = useState({
    theme: user?.preferences?.theme || 'dark',
    notifications: user?.preferences?.notifications !== false
  })

  const handleSavePreferences = () => {
    updateUserPreferences(preferences)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setPreferences({
      theme: user?.preferences?.theme || 'dark',
      notifications: user?.preferences?.notifications !== false
    })
    setIsEditing(false)
  }

  if (!user) {
    return null
  }

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-600">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100 mb-1">{user.name}</h3>
          <p className="text-slate-400 text-sm">@{user.username}</p>
          <p className="text-slate-400 text-sm">{user.email}</p>
        </div>
        <span className="px-2 py-1 bg-royal-600/20 text-royal-400 border border-royal-600/30 text-xs font-medium rounded">
          Admin
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-slate-300 font-medium mb-2">Admin Preferences</h4>
          {isEditing ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Theme</span>
                <select
                  value={preferences.theme}
                  onChange={(e) => setPreferences({...preferences, theme: e.target.value})}
                  className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-slate-100 text-sm"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Notifications</span>
                <button
                  onClick={() => setPreferences({...preferences, notifications: !preferences.notifications})}
                  className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                    preferences.notifications ? 'bg-royal-600' : 'bg-slate-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                    preferences.notifications ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleSavePreferences}
                  className="px-3 py-1 bg-royal-600 hover:bg-royal-700 text-slate-100 text-sm font-medium rounded transition-colors duration-300"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-3 py-1 bg-slate-600 hover:bg-slate-700 text-slate-100 text-sm font-medium rounded transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Theme</span>
                <span className="text-slate-300 text-sm capitalize">{preferences.theme}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Notifications</span>
                <span className="text-slate-300 text-sm">{preferences.notifications ? 'Enabled' : 'Disabled'}</span>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium rounded transition-colors duration-300"
              >
                Edit Preferences
              </button>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-700">
          <button
            onClick={logout}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-slate-100 font-medium rounded-lg transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
