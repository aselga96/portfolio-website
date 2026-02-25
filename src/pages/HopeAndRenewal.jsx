import { Link } from 'react-router-dom'

export default function HopeAndRenewal() {
  const poem = {
    title: 'Hope and Renewal',
    content: `Morning light after dark nights,
The sun breaking through the clouds,
Reminding us that darkness doesn't last,
That there's always a new beginning,
Always a chance to start again.

Spring's rebellion against winter,
Green shoots pushing through frozen ground,
Flowers blooming in the snow,
Nature's declaration that life wins,
That warmth always returns.

Flowers through concrete cracks,
Life finding a way in the harshest conditions,
Beauty growing in the most unlikely places,
Hope blooming where it seems impossible,
Renewal happening in the most broken spaces.

First breath after holding it too long,
Release of tension,
Relaxation of shoulders,
Reminder that we can breathe again,
That we can find peace again.

New chapter after closing the old one,
Fresh page waiting to be written,
Blank slate full of possibilities,
Future unwritten and full of hope,
Renewal of purpose and direction.

Hope is the thing that keeps us going,
When everything else fails,
When the night is darkest,
When the path is unclear,
Hope is the light that guides us forward,
Renewal is the promise that keeps us strong.`
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
    </div>
  )
}
