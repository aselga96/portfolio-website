export default function Contact() {
  return (
    <div className="min-h-screen py-24 sm:py-32 px-6 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden bg-gradient-to-br from-midnight-900 via-slate-900 to-blue-950">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 - Top Left */}
        <div className="absolute top-10 left-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-1"></div>
        
        {/* Orb 2 - Bottom Right */}
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-royal-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-orb-2 animation-delay-2000"></div>
        
        {/* Orb 3 - Top Center */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float-orb-3 animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100 text-center mb-4 sm:mb-6">
          <span className="bg-gradient-to-r from-royal-400 via-blue-500 to-midnight-400 bg-clip-text text-transparent animate-gradient">
            Get In <span className="text-royal-400">Touch</span>
          </span>
        </h2>
        <div className="bg-slate-700/85 backdrop-blur-md rounded-xl p-8 sm:p-12 lg:p-16 border border-slate-500/50 shadow-sm">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-sm sm:text-base text-slate-100 font-semibold mb-2">Contact Me</div>
            <div className="text-xs sm:text-sm text-slate-300">Let's connect and discuss opportunities</div>
          </div>
          <form className="space-y-6 sm:space-y-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/80 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-royal-500 transition-colors text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/80 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-royal-500 transition-colors text-sm sm:text-base"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/80 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-royal-500 transition-colors text-sm sm:text-base"
            />
            <textarea
              placeholder="Your Message"
              rows="4 sm:rows-5"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/80 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-royal-500 transition-colors resize-none text-sm sm:text-base"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-gradient-to-r from-royal-600 to-midnight-700 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
