function Destinations() {
  const destinations = [
    {
      name: "Jiuzhaigou Valley",
      description: "UNESCO World Heritage site famous for its colorful lakes, waterfalls, and snow-capped peaks",
      image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Colorful lakes", "Multi-level waterfalls", "Tibetan culture", "Alpine scenery"]
    },
    {
      name: "Dujiangyan",
      description: "Ancient irrigation system and UNESCO site with stunning mountain scenery and cultural significance",
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Ancient engineering", "UNESCO heritage", "Mountain views", "Cultural history"]
    },
    {
      name: "West Sichuan",
      description: "Remote highlands with pristine landscapes, Tibetan culture, and breathtaking mountain passes",
      image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Tibetan highlands", "Mountain passes", "Nomadic culture", "Pristine nature"]
    },
    {
      name: "Mount Emei",
      description: "Sacred Buddhist mountain with ancient temples, diverse wildlife, and breathtaking sunrise views",
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Buddhist temples", "Golden Summit", "Monkey encounters", "Sunrise views"]
    },
    {
      name: "Chengdu City",
      description: "Vibrant capital city known for spicy cuisine, tea culture, and the famous Giant Panda Research Base",
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Giant pandas", "Sichuan cuisine", "Tea houses", "Modern culture"]
    },
    {
      name: "Daocheng Yading",
      description: "The last Shangri-La with pristine alpine landscapes, sacred peaks, and crystal-clear lakes",
      image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Sacred mountains", "Alpine lakes", "Pristine nature", "Tibetan culture"]
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most breathtaking locations in Sichuan Province, each offering unique natural beauty and cultural experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-200 mb-4 leading-relaxed">{destination.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight, highlightIndex) => (
                    <span 
                      key={highlightIndex}
                      className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Plan Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}

export default Destinations;