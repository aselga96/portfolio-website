import profileImage from '../assets/profile.jpg'

export default function About() {
  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 - Top Left */}
        <div className="absolute top-10 left-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-1"></div>
        
        {/* Orb 2 - Top Right */}
        <div className="absolute top-20 right-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-2 animation-delay-2000"></div>
        
        {/* Orb 3 - Bottom Right */}
        <div className="absolute bottom-10 right-20 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float-orb-3 animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 text-center mb-8 sm:mb-12 lg:mb-16">
          About <span className="text-royal-400">Me</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            {/* Profile Image */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] mx-auto rounded-full overflow-hidden border-4 border-slate-500 shadow-2xl relative z-10">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-royal-600 to-midnight-800 rounded-full blur-xl opacity-60"></div>
          </div>
          <div className="space-y-4 p-6 sm:p-8 bg-slate-700/85 backdrop-blur-md rounded-xl border border-slate-500/50 shadow-sm">
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              I'm a passionate hospitality professional with over 5 years of experience in barista services, coffee catering, and customer relations. 
              I love creating exceptional experiences through quality service and attention to detail, bringing warmth and excellence to every interaction.
            </p>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              My journey extends beyond hospitality into meaningful ministry work. I've dedicated over 10 years to pastoral ministry, serving as a missionary with Life Teen and focusing on youth outreach and spiritual guidance. 
              This included a transformative summer in 2022 serving in Dahlonega, Georgia, and earlier in July 2019, when I served with the Missioners of Christ in Honduras, experiencing powerful cross-cultural ministry.
              These experiences, combined with my background in retail, have shaped my ability to create welcoming environments and build lasting relationships in every context.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-slate-600/80 backdrop-blur-md rounded-lg p-4 border border-slate-400/30 shadow-sm">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-royal-400 mb-1">5+</div>
                <div className="text-slate-200 text-xs sm:text-sm">Years in Coffee</div>
              </div>
              <div className="bg-slate-600/80 backdrop-blur-md rounded-lg p-4 border border-slate-400/30 shadow-sm">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-royal-400 mb-1">10+</div>
                <div className="text-slate-200 text-xs sm:text-sm">Years in Pastoral Ministry</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
