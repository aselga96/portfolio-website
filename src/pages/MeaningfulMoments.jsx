import { Link } from 'react-router-dom'

export default function MeaningfulMoments() {
  const entry = {
    title: 'Meaningful Moments',
    date: 'April 3, 2024',
    content: `Today I want to write about the small moments that make life beautiful. We're so often focused on the big milestones - graduations, promotions, weddings, buying a house - but I'm starting to realize that life is really made up of countless tiny, meaningful moments.

Like this morning when I was making breakfast and the sunlight hit my coffee mug just right, creating this perfect golden glow. For a second, everything felt peaceful and right with the world. It lasted maybe three seconds, but I carried that feeling with me all day.

Or yesterday when I was walking home and saw an elderly couple holding hands. They were moving slowly, taking each step carefully, but they were so connected to each other. There was something so beautiful about their quiet companionship, a love that had clearly weathered decades together. It made me hopeful about the possibility of finding that kind of connection.

Last week, I was having a terrible day at work. Nothing was going right, I was frustrated and ready to give up. Then a coworker I barely know stopped by my desk and said, "You're doing great work, by the way. I really admire how you handle difficult clients." It was such a small thing, but it completely changed my perspective. Sometimes we forget how much our words can matter to someone else.

I've been trying to be more present for these moments. Instead of scrolling through my phone while waiting in line, I look around and really see the people around me. Instead of rushing through my walk to the subway, I notice the way the light hits the buildings, the sounds of the city waking up, the little details I usually miss.

Even difficult moments can be meaningful. Last month, I had a fight with a close friend. We said things we didn't mean, and there was a period where we weren't speaking. But when we finally sat down to talk it out, there was something beautiful about that vulnerability - admitting we were wrong, forgiving each other, choosing the relationship over being right. Those hard conversations are often where the deepest connections are formed.

I've started keeping a "small joys" list in my journal. Things like: the perfect avocado, finding a parking spot right in front, a stranger's genuine smile, the smell of rain on hot pavement, a song coming on the radio at exactly the right moment. They're silly little things, but they add up to a life filled with beauty.

Tonight I'm sitting by my window watching the sunset. The sky is painted in shades of pink and orange that look like they were mixed by an artist. In a few minutes, it will be gone. But for now, I'm just sitting here, watching, feeling grateful for this moment and all the other small, beautiful moments that make up this life.

Maybe that's the secret - not to wait for the big moments, but to collect the small ones like precious stones, creating a mosaic of meaning that makes even the ordinary days extraordinary.`
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
              {entry.title}
            </h1>
            <p className="text-royal-400 text-lg font-medium mb-4">{entry.date}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-royal-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-slate-300 leading-relaxed text-lg">
              {entry.content}
            </div>
          </div>
          
          <div className="text-center mt-12 space-x-4">
            <Link 
              to="/journal-entries"
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-royal-600 hover:bg-royal-700 text-slate-100 font-medium rounded-lg transition-colors duration-300"
            >
              ← Back to Journal Entries
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
