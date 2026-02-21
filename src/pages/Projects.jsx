export default function Projects() {
  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sage-900 text-center mb-8 sm:mb-12 lg:mb-16">
          Featured <span className="text-green-700">Work</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              title: 'Coffee Catering Service',
              description: 'Premium coffee catering for corporate events and special occasions with full barista service',
              tech: ['Customer Service', 'Event Planning', 'Quality Control'],
              color: 'from-green-500 to-sage-600',
              image: '☕' // Add your image path here
            },
            {
              title: 'Retail Cashier Experience',
              description: 'Efficient customer service and transaction management in fast-paced retail environment',
              tech: ['POS Systems', 'Inventory Management', 'Customer Relations'],
              color: 'from-sage-500 to-emerald-600',
              image: '🛒' // Add your image path here
            },
            {
              title: 'Missionary Work Honduras',
              description: 'Community service and youth ministry work building relationships and providing support',
              tech: ['Community Outreach', 'Youth Programs', 'Cultural Exchange'],
              color: 'from-emerald-500 to-green-600',
              image: '🌍' // Add your image path here
            }
          ].map((project, index) => (
            <div
              key={index}
              className="group relative bg-sage-50/90 backdrop-blur-md rounded-xl overflow-hidden border border-sage-500 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`h-32 sm:h-40 lg:h-48 bg-gradient-to-br ${project.color} opacity-80 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl`}>
                {project.image}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-sage-800 mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-sage-600 text-sm sm:text-base mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-green-100/90 rounded-full text-xs text-sage-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-sage-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
