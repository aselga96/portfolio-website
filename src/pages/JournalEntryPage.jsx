import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import DirectorySideBar from '../components/DirectorySideBar'
import AuthModal from '../components/AuthModal'
import DeletedItemsManager from '../components/DeletedItemsManager'
import { useAuth } from '../contexts/AuthContext'

const journalEntryData = [
  {
    id: 'daily-reflections',
    title: 'Finding Beauty in the Ordinary',
    description: 'Thoughts and observations from everyday experiences, finding meaning in ordinary moments and celebrating small victories.',
    date: 'April 10, 2024',
    content: `Today I took a different route to work, walking through the neighborhood instead of driving. I noticed things I'd never seen before - the way the morning light hit the dew on spiderwebs, creating tiny rainbows in the grass, the elderly man sitting on his porch with a cup of coffee and a book, the children walking to school with their backpacks bouncing behind them. These ordinary moments, usually lost in the rush of daily life, suddenly seemed extraordinary when I slowed down enough to really see them.

I realized how much we miss when we're always moving too fast. The beauty isn't in grand events or spectacular scenery - it's in the small, everyday moments that we walk past without noticing. The way a stranger holds the door for someone, the genuine smile from a barista, the way sunlight filters through leaves creating patterns on the sidewalk. These are the moments that make life rich and meaningful, yet we're often too busy or distracted to appreciate them.

This evening, I decided to make a conscious effort to slow down and notice more. I watched the sunset from my window, really seeing how the colors changed from orange to pink to purple, how the clouds caught the last light before fading into darkness. I listened to the sounds of the evening - crickets starting their evening song, distant traffic, the gentle hum of the refrigerator. These sounds, usually just background noise, became a kind of music when I paid attention to them.

There's something profound about finding beauty in the ordinary. It reminds us that we don't need extraordinary circumstances to experience joy or wonder. The extraordinary is already here, woven into the fabric of our everyday lives. We just need to slow down enough to notice it, to open our eyes and hearts to the beauty that surrounds us constantly.

Tomorrow, I'm going to try to carry this awareness with me. Not just on special occasions, but in the middle of ordinary days, during routine tasks, in the midst of busy schedules. Because the beauty isn't somewhere else - it's right here, right now, in this ordinary moment.`
  },
  {
    id: 'life-updates',
    title: 'Celebrating Small Victories',
    description: 'Personal milestones, achievements, and significant life events that mark the journey of growth and discovery.',
    date: 'April 8, 2024',
    content: `Today I finished reading a book that's been sitting on my nightstand for three months. It wasn't a bestseller or a classic novel - just a simple story that caught my attention one afternoon. But as I turned the last page, I felt a sense of accomplishment that was disproportionate to the achievement. It reminded me how often we overlook the small victories in our lives, always focused on the next big goal, the next milestone, the next major accomplishment.

We live in a world that celebrates grand achievements - promotions, graduations, marriages, buying houses. But life is really made up of small victories: finishing a book, learning a new recipe, having a difficult conversation we've been avoiding, finally organizing that cluttered drawer, making it through a tough workout when we wanted to quit. These small wins are the building blocks of our character, the proof that we're growing, changing, becoming better versions of ourselves.

I've been keeping a victory journal lately - not just for big achievements, but for the small ones too. Yesterday I wrote down: "Made my bed without being asked." "Didn't check my phone during dinner." "Walked around the block instead of driving to the corner store." "Finished a work project that seemed overwhelming." Reading through this list at the end of the day, I realized I had accomplished more than I thought, not in terms of productivity, but in terms of personal growth.

The problem with always chasing big goals is that we often miss the joy of the journey. We're so focused on the destination that we forget to appreciate the path. But the path is where life happens - in the small struggles, the incremental improvements, the moments of doubt and determination that shape who we become. The big achievements are just milestones that mark the completion of many small victories along the way.

Tonight, I'm celebrating finishing that book, but I'm also celebrating the small victories that got me here: the discipline to read a little each day instead of scrolling through social media, the choice to prioritize personal growth over mindless entertainment, the patience to stick with a story even when it was slow in the middle. These small victories, accumulated over months, led to this moment of accomplishment.

Tomorrow, I'm going to add more small victories to my journal. Not because they're impressive, but because they matter. Because life isn't made up of grand moments - it's made up of small, consistent choices that, over time, create the life we want to live.`
  },
  {
    id: 'growth-journey',
    title: 'The Courage to Be Imperfect',
    description: 'Personal development insights, learning experiences, and the ongoing process of becoming a better version of myself.',
    date: 'April 5, 2024',
    content: `I've been trying to learn guitar for six months now, and I'm still terrible at it. My fingers stumble over the chords, my timing is off, and I can play maybe three songs without messing up. Every time I practice, I get frustrated with my lack of progress. I see people online who picked up a guitar and were playing beautifully within months, and I wonder what's wrong with me, why I'm not improving faster.

Yesterday, I almost gave up. I was practicing a simple chord progression and kept messing up the transition from G to C. In frustration, I almost threw the guitar across the room. But then I remembered something my teacher told me once: "The goal isn't to be perfect. The goal is to keep showing up."

So I took a deep breath and tried again. And again. And again. I messed up the chord transition at least a dozen times before finally getting it right. But when I did, something shifted inside me. It wasn't about getting it perfect - it was about not giving up. It was about having the courage to be imperfect, to make mistakes in front of myself, to keep trying even when it feels hopeless.

This morning, I realized that growth isn't about becoming perfect. It's about becoming better than we were yesterday. It's about having the courage to show up and try again, even when we know we might fail. It's about embracing the process, the struggle, the journey, not just the destination.

I think we've lost the art of appreciating ordinary days. We're so focused on creating extraordinary experiences that we've forgotten how to find magic in the mundane. But the extraordinary is already here, woven into the fabric of our everyday lives. We just need to slow down enough to notice it, to open our eyes and hearts to the beauty that surrounds us constantly.

Today, I'm celebrating my imperfect guitar playing. I'm celebrating the courage to keep trying, the patience to work through frustration, the willingness to be a beginner. And I'm celebrating the small victory of finally getting that chord transition right - not because it's perfect, but because I didn't give up.

Tomorrow, I'll practice again. I'll probably mess up the chords again, get frustrated again, want to quit again. But I'll remember that the goal isn't to be perfect - the goal is to keep showing up. And that's a victory worth celebrating.`
  },
  {
    id: 'meaningful-moments',
    title: 'The Magic of Ordinary Days',
    description: 'Capturing the small but significant moments that bring joy, wisdom, and perspective to everyday life.',
    date: 'April 3, 2024',
    content: `Today was just an ordinary Tuesday. Nothing special happened - no major events, no exciting news, no dramatic changes. But as I sit here reflecting on the day, I realize that ordinary days are where life really happens. The extraordinary moments we remember - the big celebrations, the dramatic changes, the milestone achievements - are just highlights. The real substance of life is in the ordinary days, the routine moments, the quiet times between the highlights.

I woke up at my usual time, made coffee, and watched the sunrise through my kitchen window. I went to work, had meetings, answered emails, ate lunch at my desk. I came home, cooked dinner, watched a show, went to bed. Nothing remarkable happened. But as I think about it, I realize that in those ordinary moments, there was so much beauty: the way my coworker helped me with a difficult task without being asked, the way the barista remembered my name and my usual order, the way my partner called just to say they were thinking of me, the way the sunset painted the sky in shades of pink and orange that I almost missed because I was too busy looking at my phone.

We're always waiting for the extraordinary, but life is mostly ordinary. And that's actually a beautiful thing. The extraordinary moments are wonderful, but they're rare. The ordinary moments are constant. They're the foundation of our lives, the rhythm that keeps us grounded, the routine that gives us stability. In those ordinary moments, we find love, connection, purpose, meaning. We find the small joys that make life worth living.

I think we've lost the art of appreciating ordinary days. We're so focused on creating extraordinary experiences that we've forgotten how to find magic in the mundane. We scroll through social media seeing everyone's highlight reels and wonder why our lives don't look like that. But nobody's highlight reel looks like their real life. The highlight reel is just the highlights - the exceptions, not the rule.

This evening, I decided to make a conscious effort to slow down and notice more. I watched the sunset from my window, really seeing how the colors changed from orange to pink to purple, how the clouds caught the last light before fading into darkness. I listened to the sounds of the evening - crickets starting their evening song, distant traffic, the gentle hum of the refrigerator. These sounds, usually just background noise, became a kind of music when I paid attention to them.

There's something profound about finding beauty in the ordinary. It reminds us that we don't need extraordinary circumstances to experience joy or wonder. The extraordinary is already here, woven into the fabric of our everyday lives. We just need to slow down enough to notice it, to open our eyes and hearts to the beauty that surrounds us constantly.

Tomorrow will be another ordinary day, and I'm looking forward to it. Because I'm learning that the magic isn't in the extraordinary - it's in the ordinary, in the routine, in the everyday moments that make up the bulk of our lives. And that's where the real beauty lies.`
  }
]

export default function JournalEntryPage() {
  const { user, isAuthenticated, isAdmin, login, logout } = useAuth()
  const { entryId } = useParams()
  const navigate = useNavigate()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  
  const currentEntry = journalEntryData.find(entry => entry.id === entryId)
  
  // Redirect to journal entries page if invalid entry ID
  if (!currentEntry) {
    navigate('/journal-entries')
    return null
  }

  const [essayData, setEssayData] = useState({
    title: currentEntry.title,
    content: currentEntry.content,
    date: currentEntry.date
  })

  const handleEssayEdit = (field, value) => {
    setEssayData({
      ...essayData,
      [field]: value
    })
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
            <span className="text-royal-400">{essayData.title}</span>
          </h1>
          
          <div className="space-y-8 sm:space-y-10">
            <div className="group relative bg-slate-700/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-400/50 hover:transform hover:scale-[1.01] transition-all duration-300 shadow-sm">
              <div className="flex-1 p-4 sm:p-6 text-left">
                {isEditing && isAdmin ? (
                  <>
                    <input
                      type="text"
                      value={essayData.title}
                      onChange={(e) => handleEssayEdit('title', e.target.value)}
                      className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3 bg-slate-600 border border-slate-500 rounded px-2 py-1 w-full"
                    />
                    <input
                      type="text"
                      value={essayData.date}
                      onChange={(e) => handleEssayEdit('date', e.target.value)}
                      className="text-xs sm:text-sm text-royal-400 font-medium bg-slate-600 border border-slate-500 rounded px-2 py-1 w-full mb-4"
                    />
                    <textarea
                      value={essayData.content}
                      onChange={(e) => handleEssayEdit('content', e.target.value)}
                      className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 bg-slate-600 border border-slate-500 rounded px-2 py-1 w-full resize-none"
                      rows={20}
                    />
                  </>
                ) : (
                  <>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-3">{essayData.title}</h3>
                    <div className="text-xs sm:text-sm text-slate-400 italic mb-4">{essayData.date}</div>
                    <div className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{essayData.content}</div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="text-center mt-16 space-x-4">
            <Link 
              to="/journal-entries"
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-royal-600 hover:bg-royal-700 text-slate-100 font-medium rounded-lg transition-colors duration-300"
            >
              ← Back to Journal Entries
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
