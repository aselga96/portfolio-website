import profileImage from '../assets/profile.jpg'

export default function About() {
  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 text-center mb-8 sm:mb-12 lg:mb-16">
          About <span className="text-green-700">Me</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            {/* Profile Image */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] mx-auto rounded-full overflow-hidden border-4 border-sage-500 shadow-2xl relative z-10">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover scale-100" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-sage-600 rounded-full blur-xl opacity-50"></div>
          </div>
          <div className="space-y-6 p-4 sm:p-6 lg:p-8 bg-sage-100/60 backdrop-blur-md rounded-2xl border border-sage-300/50 shadow-lg">
            <p className="text-sage-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              I'm a passionate hospitality professional with over 5 years of experience in barista services, coffee catering, and customer relations. 
              I love creating exceptional experiences through quality service and attention to detail, bringing warmth and excellence to every interaction.
            </p>
            <p className="text-sage-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              My journey extends beyond hospitality into meaningful ministry work. I've dedicated over 10 years to pastoral ministry, serving as a missionary with Life Teen and focusing on youth outreach and spiritual guidance. 
              This included a transformative summer in 2022 serving in Dahlonega, Georgia, and earlier in July 2019, when I served with the Missioners of Christ in Honduras, experiencing powerful cross-cultural ministry.
              These experiences, combined with my background in retail, have shaped my ability to create welcoming environments and build lasting relationships in every context.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-sage-50/90 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-sage-500">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700 mb-2">5+</div>
                <div className="text-sage-800 text-xs sm:text-sm lg:text-base">Years in Coffee</div>
              </div>
              <div className="bg-sage-50/90 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-sage-500">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-sage-700 mb-2">10+</div>
                <div className="text-sage-800 text-xs sm:text-sm lg:text-base">Years in Pastoral Ministry</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
