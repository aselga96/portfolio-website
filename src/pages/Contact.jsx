export default function Contact() {
  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 text-center mb-8 sm:mb-12 lg:mb-16">
          Get In <span className="text-green-700">Touch</span>
        </h2>
        <div className="bg-sage-100/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border border-sage-300/50 shadow-lg">
          <div className="text-center mb-4 sm:mb-6">
            <div className="text-sm sm:text-base text-sage-800 font-semibold mb-1">Contact Me</div>
            <div className="text-xs sm:text-sm text-sage-600">Let's connect and discuss opportunities</div>
          </div>
          <form className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/80 border border-sage-300 rounded-lg text-sage-800 placeholder-sage-500 focus:outline-none focus:border-green-600 transition-colors text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/80 border border-sage-300 rounded-lg text-sage-800 placeholder-sage-500 focus:outline-none focus:border-green-600 transition-colors text-sm sm:text-base"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/80 border border-sage-300 rounded-lg text-sage-800 placeholder-sage-500 focus:outline-none focus:border-green-600 transition-colors text-sm sm:text-base"
            />
            <textarea
              placeholder="Your Message"
              rows="4 sm:rows-5"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/80 border border-sage-300 rounded-lg text-sage-800 placeholder-sage-500 focus:outline-none focus:border-green-600 transition-colors resize-none text-sm sm:text-base"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-gradient-to-r from-green-700 to-sage-800 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-6 sm:mt-8 flex justify-center space-x-4 sm:space-x-6">
            {['GitHub', 'LinkedIn', 'Twitter', 'YouTube'].map((social, index) => (
              <button
                key={index}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-sage-200 rounded-full flex items-center justify-center text-sage-700 hover:bg-green-100 hover:text-green-600 transition-colors"
                onClick={() => {
                  if (social === 'YouTube') {
                    window.open('https://www.youtube.com/@SelgaStudios', '_blank')
                  }
                }}
              >
                {social === 'GitHub' && '🐙'}
                {social === 'LinkedIn' && '💼'}
                {social === 'Twitter' && '🐦'}
                {social === 'YouTube' && '📺'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
