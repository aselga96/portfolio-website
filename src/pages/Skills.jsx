export default function Skills() {
  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 text-center mb-8 sm:mb-12 lg:mb-16">
          Technical <span className="text-green-700">Skills</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { name: 'Customer Service', level: 95, color: 'bg-green-500' },
            { name: 'Barista Skills', level: 90, color: 'bg-sage-600' },
            { name: 'Event Planning', level: 85, color: 'bg-emerald-600' },
            { name: 'Retail Operations', level: 88, color: 'bg-green-600' },
            { name: 'Community Outreach', level: 80, color: 'bg-sage-500' },
            { name: 'Bilingual Communication', level: 75, color: 'bg-emerald-500' }
          ].map((skill, index) => (
            <div className="bg-sage-100/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-sage-300/50 shadow-lg">
              <div className="flex justify-between mb-2">
                <span className="text-sage-800 font-semibold text-sm sm:text-base">{skill.name}</span>
                <span className="text-sage-700 text-sm sm:text-base">{skill.level}%</span>
              </div>
              <div className="w-full bg-sage-300 rounded-full h-2 sm:h-3">
                <div
                  className={`${skill.color} h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
