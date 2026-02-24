import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import DirectorySideBar from '../components/DirectorySideBar'
import AuthModal from '../components/AuthModal'
import DeletedItemsManager from '../components/DeletedItemsManager'
import { useAuth } from '../contexts/AuthContext'

const poemData = [
  {
    id: 'spiritual-reflections',
    title: 'Spiritual Reflections',
    description: 'Finding faith in the storm, hearing divine whispers, building altars in ordinary places.',
    content: `Last night's storm taught me more about faith than any sermon I've ever heard. As the thunder rolled and lightning flashed across the sky, I found myself sitting in the dark, watching nature's raw power unfold. There was something strangely peaceful about it – the storm wasn't trying to be anything other than what it was: powerful, unapologetic, temporary.

In the midst of the chaos, I remembered a conversation I had weeks ago with a friend who was going through their own storm. "How do you keep believing when everything feels like it's falling apart?" they had asked, tears streaming down their face. At the time, I gave them the usual platitudes about faith and perseverance, but watching the storm last night, I realized the answer is simpler and more profound.

Faith isn't about avoiding the darkness – it's about finding light within it. The lightning doesn't eliminate the night; it illuminates it briefly, reminding us that even in darkness, there is power, there is beauty, there is purpose. The thunder doesn't silence the world; it adds its voice to the chorus, reminding us that sometimes the most important messages come in the loudest packages.

I thought about all the times I had tried to rush through difficult seasons, wishing them away, praying for the storm to pass. But last night, I sat with the storm. I listened to it, felt its energy, respected its place in the natural order. And in doing so, I found a strange peace – the kind that comes not from absence of struggle, but from acceptance of its role in our growth.

There's something profound about finding beauty in the ordinary. It reminds us that we don't need extraordinary circumstances to experience joy or wonder. The extraordinary is already here, woven into the fabric of our everyday lives. We just need to slow down enough to notice it, to open our eyes and hearts to the beauty that surrounds us constantly.`
  },
  {
    id: 'natures-wisdom',
    title: 'Nature\'s Wisdom',
    description: 'Forest patience, ocean changes, mountain strength through perseverance.',
    content: `I spent the weekend hiking through the old forest trail, the one that winds through the ancient woods behind my house. The path was overgrown in places, nature slowly reclaiming what humans had built. As I walked, I couldn't help but think about how different the forest's concept of time is from ours.

Trees grow slowly, adding rings year by year, marking the passage of seasons in ways we can barely comprehend. The oldest tree in this forest is over 400 years old, a silent witness to centuries of human history. It has stood through storms, droughts, and the slow march of progress, yet it continues to grow, reaching ever higher toward the light.

I watched a spider building its web between two branches, an intricate masterpiece of engineering and patience. When a branch fell and destroyed part of the web, the spider didn't despair or give up. It simply began rebuilding, starting from where it was, using what it had, creating something new from the destruction.

The ocean teaches us about change. Every wave that crashes on the shore is different, yet the ocean remains the same. It adapts to the moon's pull, the wind's direction, the shape of the coastline. It's powerful enough to carve cliffs into sand over millennia, yet gentle enough to support countless forms of life.

Mountains teach us about strength through perseverance. They don't grow overnight; they are formed through immense pressure over millions of years. They stand firm against storms, yet they're not rigid – they erode and change, adapting to the forces that shape them.

In nature, there's no rush, no anxiety about productivity or progress. Things happen in their own time, according to their own rhythms. A seed doesn't worry about how quickly it's growing; it simply grows. A flower doesn't compare itself to other flowers; it just blooms.

I came home from that hike feeling different, somehow calmer and more centered. The forest had taught me something about patience, about the beauty of slow growth, about the strength that comes from enduring rather than resisting. Nature's wisdom isn't found in grand revelations or dramatic moments – it's in the quiet, steady processes that sustain all life.`
  },
  {
    id: 'human-connection',
    title: 'Human Connection',
    description: 'Coffee conversations, being truly seen, community garden bonds.',
    content: `Today I had coffee with Sarah, the kind of conversation that reminds me why human connection matters so much. We sat in the corner of our favorite café, the one with the mismatched chairs and the smell of fresh bread, and we talked for three hours without once checking our phones.

We talked about her new job, my recent struggles with writing, the way the city changes in autumn, the fear that keeps us up at night, the hope that gets us out of bed in the morning. There were moments of laughter so hard we cried, moments of silence so comfortable we didn't need to fill them, moments of understanding so deep it felt like she was reading my mind.

Afterward, I walked home thinking about how rare these conversations have become. We live in a world of endless scrolling, of carefully curated social media posts, of text messages that can be edited and deleted, of video calls that freeze and pixelate. We have more ways to connect than ever before, yet we seem more disconnected than ever.

I remember my grandmother's stories about her neighborhood, how everyone knew each other, how doors were always unlocked, how people shared food and tools and childcare and grief. She described a web of relationships so intricate and strong that when someone fell ill, the entire community rallied around them. When someone celebrated, the whole block celebrated.

We've lost that, I think. We've traded real connection for convenience, depth for breadth, authenticity for performance. We have thousands of "friends" online but few people who truly know us, few people we could call at 3 AM when our world is falling apart.

But today, sitting in that café with Sarah, I felt a glimmer of what we've lost. There was something magical about being fully present with another person, about sharing our unfiltered thoughts and feelings, about being seen and heard and understood without judgment or expectation.

Human connection isn't about grand gestures or dramatic declarations. It's about the small moments: the way someone's eyes light up when they talk about something they love, the comfort of shared silence, the courage to be vulnerable, the grace to hold space for someone else's pain.

Tonight, I'm grateful for that coffee, for that conversation, for that reminder of what really matters. In a world that constantly pulls us apart, these moments of genuine connection are what keep us human.`
  },
  {
    id: 'hope-and-renewal',
    title: 'Hope and Renewal',
    description: 'Morning light after dark nights, spring\'s rebellion, flowers through concrete.',
    content: `Spring has always felt like a miracle to me. After months of gray skies and bare trees, of cold that seeps into your bones and darkness that comes too early and stays too long, suddenly there's green pushing through frozen ground. There are buds on trees that looked dead a week ago, there are birds singing songs they haven't sung in months, there's light in the sky when I leave for work in the morning.

I watched a dandelion growing through a crack in the sidewalk today. It shouldn't be possible – concrete is unforgiving, cracks are hostile environments, yet there it was, a small yellow flower turning toward the sun. It wasn't perfect; some petals were torn, the stem was bent, but it was alive, it was growing, it was refusing to accept the limitations of its environment.

That's what hope feels like sometimes – a small, stubborn insistence that life will find a way, that beauty will emerge from brokenness, that light will overcome darkness. It's not always loud or dramatic; sometimes it's as quiet as a flower growing through concrete, as gentle as the first warm day after a long winter.

I've been through my own winters lately – seasons of doubt, of fear, of grief that felt like it would never end. There were days when I couldn't imagine ever feeling hopeful again, when the darkness seemed so complete that I forgot what light looked like. But spring always comes, even when we're sure it won't.

Hope isn't about denying the darkness or pretending everything is fine. It's about believing in the possibility of dawn while it's still night, about trusting that seeds planted in frozen ground will eventually sprout, about holding on to the memory of warmth when you're cold.

I see it everywhere now – in the way people help strangers without expecting anything in return, in the way communities rebuild after disasters, in the way artists create beauty from pain, in the way love survives loss, in the way we keep trying even when we've failed.

Hope is the most human thing we have. It's the recognition that no matter how dark the night, no matter how cold the winter, no matter how broken the world, there is always the possibility of morning, of spring, of healing, of renewal.

Tomorrow, I'm going to plant a garden. I don't know if anything will grow, but I'm going to plant seeds anyway. Because that's what hope is – not a guarantee of good outcomes, but a commitment to keep trying, to keep believing, to keep moving toward the light.`
  }
]

export default function PoemPage() {
  const { user, isAuthenticated, isAdmin, login, logout } = useAuth()
  const { poemId } = useParams()
  const navigate = useNavigate()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  
  const currentPoem = poemData.find(poem => poem.id === poemId)
  
  // Redirect to poems page if invalid poem ID
  if (!currentPoem) {
    navigate('/poems')
    return null
  }

  const [essayData, setEssayData] = useState({
    title: currentPoem.title,
    content: currentPoem.content
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
                    <div className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{essayData.content}</div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="text-center mt-16 space-x-4">
            <Link 
              to="/poems"
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-royal-600 hover:bg-royal-700 text-slate-100 font-medium rounded-lg transition-colors duration-300"
            >
              ← Back to Poems
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
