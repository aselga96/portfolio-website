import profileImage from '../assets/profile.jpg'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/projects')
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 - Top Left */}
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-1"></div>
        
        {/* Orb 2 - Top Right */}
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-2 animation-delay-2000"></div>
        
        {/* Orb 3 - Bottom Right */}
        <div className="absolute bottom-10 right-20 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float-orb-3 animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-100 text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          About <span className="text-royal-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            {/* Profile Image */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mx-auto rounded-full overflow-hidden border-2 sm:border-4 border-slate-500 shadow-2xl relative z-10">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-royal-600 to-midnight-800 rounded-full blur-xl opacity-60"></div>
          </div>
          <div className="space-y-4 p-4 sm:p-6 md:p-8 bg-slate-700/85 backdrop-blur-md rounded-xl border border-slate-500/50 shadow-sm order-1 md:order-2">
            <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              I'm a passionate hospitality professional with over 5 years of experience in barista services, coffee catering, and customer relations. 
              I love creating exceptional experiences through quality service and attention to detail, bringing warmth and excellence to every interaction.
            </p>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              My journey extends beyond hospitality into meaningful ministry work. I've dedicated over 10 years to pastoral ministry, serving as a missionary with Life Teen and focusing on youth outreach and spiritual guidance. 
              This included a transformative summer in 2022 serving in Dahlonega, Georgia, and earlier in July 2019, when I served with the Missioners of Christ in Honduras, experiencing powerful cross-cultural ministry.
              These experiences, combined with my background in retail, have shaped my ability to create welcoming environments and build lasting relationships in every context.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-slate-600/80 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-slate-400/30 shadow-sm">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-royal-400 mb-1">5+</div>
                <div className="text-slate-200 text-xs sm:text-sm">Years in Coffee</div>
              </div>
              <div className="bg-slate-600/80 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-slate-400/30 shadow-sm">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-royal-400 mb-1">10+</div>
                <div className="text-slate-200 text-xs sm:text-sm">Years in Pastoral Ministry</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={handleBack}
            className="inline-flex items-center px-8 py-3 bg-royal-600 hover:bg-royal-700 text-slate-100 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </button>
        </div>
      </div>
    </div>
  )
}
