  function About() {
  const stats = [
    { number: "500+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "5", label: "Years Experience" },
    { number: "24/7", label: "Support" }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Personalized Itineraries",
      description: "Every tour is customized to your interests, pace, and preferences for a truly unique experience."
    },
    {
      icon: "👨‍💼",
      title: "Expert Local Guides",
      description: "Our knowledgeable guides are locals who share insider stories and hidden gems you won't find elsewhere."
    },
    {
      icon: "🚗",
      title: "Premium Vehicles",
      description: "Travel in comfort with our fleet of well-maintained, air-conditioned vehicles suitable for all terrains."
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Your safety is our priority with comprehensive insurance, emergency support, and experienced drivers."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Sichuan Tours</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for discovering the wonders of Sichuan Province through premium private car tours
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Discover Sichuan Like Never Before
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by passionate locals who fell in love with Sichuan's incredible diversity, we specialize in creating 
              unforgettable private car tour experiences that showcase the province's natural beauty, rich culture, and 
              world-renowned cuisine.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From the mystical landscapes of Jiuzhaigou to the bustling streets of Chengdu, from ancient Buddhist temples 
              to modern culinary adventures, we craft personalized journeys that create lasting memories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-center"
              >
                Start Your Journey
              </a>
              <a 
                href="#services" 
                className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 text-center"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Sichuan landscape" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border-2 border-yellow-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;