import { Link } from 'react-router-dom'

export default function GrowthJourney() {
  const entry = {
    title: 'Growth Journey',
    date: 'April 5, 2024',
    content: `I've been thinking a lot about growth lately - not the kind you can measure with a ruler or track on a scale, but the kind that happens slowly, almost imperceptibly, until one day you look back and realize how far you've come.

Six months ago, I would have panicked at the thought of speaking up in a meeting. Today, I presented my ideas to a room full of executives and felt confident doing it. What changed? Not overnight, that's for sure. It was the accumulation of small acts of bravery - raising my hand in smaller meetings, volunteering to lead a presentation, practicing my talking points in the mirror until they felt natural.

I used to think growth was supposed to be dramatic and visible - like in movies where the character has a breakthrough moment and suddenly becomes a different person. Real growth is quieter. It's the decision to read 10 pages instead of scrolling through social media. It's choosing to go for a walk when you'd rather stay on the couch. It's apologizing first, even when you're not sure you were wrong.

One of the biggest areas of growth for me has been learning to be comfortable with discomfort. I used to avoid anything that made me feel awkward or uncertain. Now, I recognize those feelings as signs that I'm stretching myself, pushing against the edges of my comfort zone. Discomfort is the price of admission for growth.

I've also learned that growth isn't linear. Some weeks I feel like I'm making huge strides, other weeks I feel like I'm backsliding. But I'm starting to understand that the backsliding is part of the process too. It's like working out - your muscles need to break down a bit to come back stronger.

Reading has been a huge catalyst for my growth. I've always been a reader, but I've been more intentional about it lately. Books about psychology, philosophy, business, creativity - each one adds a new tool to my toolkit. Sometimes I'll read something that doesn't resonate immediately, but months later, in a completely different context, the lesson will click into place.

Relationships have been another area of growth. I'm learning to communicate more honestly, to set boundaries without guilt, to give without expecting anything in return. These are skills I'm still developing, but I can see the difference in how I interact with people compared to a year ago.

The funny thing about growth is that the more you learn, the more you realize how much you don't know. I used to think I had things figured out. Now I understand that wisdom is recognizing how little any of us really knows, and being okay with that.

I'm not the same person I was a year ago, and I won't be the same person a year from now. That's not just okay - it's exactly as it should be. Growth isn't about becoming someone different. It's about becoming more fully yourself.`
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
