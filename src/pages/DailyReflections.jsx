import { Link } from 'react-router-dom'

export default function DailyReflections() {
  const entry = {
    title: 'Daily Reflections',
    date: 'April 10, 2024',
    content: `Today I woke up to the sound of birds singing outside my window. It's amazing how something so simple can set the tone for the entire day. I took a moment to just listen, to really appreciate the melody they were creating.

Morning coffee has become a ritual for me, but today it felt different. Instead of rushing through it while checking emails, I sat on my balcony and watched the world wake up. The way the sunlight hit the buildings across the street, creating golden highlights on the brickwork - it was like watching a painting come to life.

I had a conversation with a stranger at the coffee shop today. We were both waiting in line, and they commented on the book I was carrying. What started as a simple exchange about literature turned into a 20-minute conversation about life, dreams, and the importance of taking time to notice the small things. It reminded me that connections can happen in the most unexpected places.

Work was challenging today, but in a good way. I'm working on a project that pushes me out of my comfort zone, and while it's frustrating at times, I can feel myself growing. The moments when I finally solve a problem that's been plaguing me for hours - those are the victories that make it all worthwhile.

Evening brought a quiet walk through the neighborhood. The spring flowers are blooming, and each garden tells a different story. Some are meticulously planned, others are wild and free. I wonder what my garden says about me.

As I sit here writing this, I'm struck by how much beauty and meaning can be found in an ordinary day. It's not about grand adventures or dramatic events (though those have their place too). It's about the accumulation of small, beautiful moments that, when woven together, create a life worth living.

Tomorrow will bring its own challenges and joys, but for tonight, I'm grateful for the simple perfection of this day.`
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
