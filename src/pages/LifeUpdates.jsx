import { Link } from 'react-router-dom'

export default function LifeUpdates() {
  const entry = {
    title: 'Life Updates',
    date: 'April 8, 2024',
    content: `Big news to share - I got the promotion! After months of hard work, late nights, and countless presentations, it finally happened. The feeling when my boss called me into her office and told me they wanted me to lead the new project team was indescribable. It's one of those moments that makes all the sacrifice worth it.

The new role comes with more responsibility, but also more creative freedom. I'll be leading a team of five incredibly talented people, and we're working on something that could genuinely make a difference in our industry. It's both terrifying and exhilarating.

In other news, I finally moved into my new apartment. After weeks of packing, unpacking, and trying to figure out where everything goes, it's starting to feel like home. The morning light in the kitchen is perfect, and my little balcony has become my favorite spot to drink coffee and watch the neighborhood wake up.

Speaking of coffee, I've started experimenting with making my own cold brew. There's something satisfying about the process - measuring the beans, timing the steep, watching the concentrate develop. Plus, it saves me a ridiculous amount of money compared to buying it every day.

My sister came to visit last weekend. We hadn't seen each other in almost a year, and it was like no time had passed. We walked around the city, ate way too much food, and stayed up until 3 AM talking about everything and nothing. Family relationships are strange like that - you can go months without seeing someone, but the connection remains unchanged.

I've also started taking guitar lessons again. I played briefly in college but let it fall by the wayside. Now, picking it up again, my fingers are protesting, but there's something magical about creating music with your own hands. Even the simple chords sound beautiful to me right now.

Health-wise, I'm trying to be more intentional about exercise and nutrition. Nothing drastic - just walking more, cooking at home instead of ordering takeout, and actually drinking enough water. Small changes, but they're starting to add up.

Life feels like it's moving in the right direction. Career is progressing, personal space is feeling like home, relationships are strong, and I'm learning new things. It's not perfect - there are still challenges and moments of doubt - but overall, I feel like I'm building something meaningful.

Here's to celebrating the wins, no matter how small, and acknowledging how far we've come.`
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
