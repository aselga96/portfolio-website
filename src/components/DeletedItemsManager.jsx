import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function DeletedItemsManager() {
  const { user, isAuthenticated, isAdmin } = useAuth()
  const [deletedJournalEntries, setDeletedJournalEntries] = useState([])
  const [deletedPoems, setDeletedPoems] = useState([])
  const [showDeletedItems, setShowDeletedItems] = useState(false)

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      const journalEntries = JSON.parse(localStorage.getItem('deletedJournalEntries') || '[]')
      const poems = JSON.parse(localStorage.getItem('deletedPoems') || '[]')
      setDeletedJournalEntries(journalEntries)
      setDeletedPoems(poems)
    }
  }, [isAuthenticated, isAdmin])

  const restoreJournalEntry = (index) => {
    const item = deletedJournalEntries[index]
    const currentJournalData = JSON.parse(localStorage.getItem('journalData') || '[]')
    currentJournalData.push(item.item)
    localStorage.setItem('journalData', JSON.stringify(currentJournalData))
    
    // Remove from deleted log
    const updatedDeleted = deletedJournalEntries.filter((_, i) => i !== index)
    setDeletedJournalEntries(updatedDeleted)
    localStorage.setItem('deletedJournalEntries', JSON.stringify(updatedDeleted))
    
    // Trigger page refresh to show restored item
    window.location.reload()
  }

  const restorePoem = (index) => {
    const item = deletedPoems[index]
    const currentPoemsData = JSON.parse(localStorage.getItem('poemsData') || '[]')
    currentPoemsData.push(item.item)
    localStorage.setItem('poemsData', JSON.stringify(currentPoemsData))
    
    // Remove from deleted log
    const updatedDeleted = deletedPoems.filter((_, i) => i !== index)
    setDeletedPoems(updatedDeleted)
    localStorage.setItem('deletedPoems', JSON.stringify(updatedDeleted))
    
    // Trigger page refresh to show restored item
    window.location.reload()
  }

  if (!isAuthenticated || !isAdmin) {
    return null
  }

  const totalDeleted = deletedJournalEntries.length + deletedPoems.length

  return (
    <div className="fixed bottom-24 left-4 z-50">
      <button
        onClick={() => setShowDeletedItems(!showDeletedItems)}
        className="px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-xs font-medium rounded transition-colors duration-300"
      >
        🗑️ Deleted ({totalDeleted})
      </button>
      
      {showDeletedItems && (
        <div className="absolute bottom-12 left-0 bg-slate-800/95 backdrop-blur-md border border-slate-600 rounded-lg shadow-2xl p-4 w-80 max-h-60 overflow-y-auto">
          <h3 className="text-sm font-medium text-slate-200 mb-3">Deleted Items</h3>
          
          {deletedJournalEntries.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs font-medium text-slate-400 mb-2">Journal Entries</h4>
              {deletedJournalEntries.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1">
                  <span className="text-xs text-slate-300 truncate">{item.item.title}</span>
                  <button
                    onClick={() => restoreJournalEntry(index)}
                    className="ml-2 px-2 py-1 bg-green-600/20 hover:bg-green-600/30 text-green-400 text-xs rounded"
                  >
                    Restore
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {deletedPoems.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-slate-400 mb-2">Poems</h4>
              {deletedPoems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1">
                  <span className="text-xs text-slate-300 truncate">{item.item.title}</span>
                  <button
                    onClick={() => restorePoem(index)}
                    className="ml-2 px-2 py-1 bg-green-600/20 hover:bg-green-600/30 text-green-400 text-xs rounded"
                  >
                    Restore
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {totalDeleted === 0 && (
            <p className="text-xs text-slate-400">No deleted items</p>
          )}
        </div>
      )}
    </div>
  )
}
