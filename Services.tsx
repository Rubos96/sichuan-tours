  function Services() {
  const services = [
    {
      icon: "🚗",
      title: "Private Car Tours",
      description: "Comfortable, air-conditioned vehicles with professional drivers who know every scenic route in Sichuan.",
      features: ["Professional drivers", "Flexible itinerary", "Comfortable vehicles", "Local expertise"]
    },
    {
      icon: "🏔️",
      title: "West Sichuan Adventures",
      description: "Explore the remote highlands of West Sichuan with Tibetan culture, pristine landscapes, and mountain passes.",
      features: ["Tibetan highlands", "Mountain passes", "Cultural immersion", "Remote landscapes"]
    },
    {
      icon: "🏛️",
      title: "Dujiangyan Heritage Tours",
      description: "Visit the ancient irrigation system and UNESCO World Heritage site with stunning mountain scenery.",
      features: ["UNESCO heritage", "Ancient engineering", "Mountain views", "Cultural history"]
    },
    {
      icon: "🐼",
      title: "Panda Experiences",
      description: "Visit the famous Chengdu Research Base and see giant pandas in their natural habitat with exclusive access tours.",
      features: ["Panda research base", "Conservation education", "Photo sessions", "Expert guides"]
    },
    {
      icon: "🍜",
      title: "Culinary Tours",
      description: "Taste authentic Sichuan cuisine with guided food tours to the best local restaurants and street food markets.",
      features: ["Authentic restaurants", "Street food tours", "Cooking classes", "Spice markets"]
    },
    {
      icon: "🌸",
      title: "Seasonal Tours",
      description: "Experience Sichuan's beauty year-round with cherry blossoms in spring, summer festivals, autumn colors, and winter snow.",
      features: ["Seasonal highlights", "Festival experiences", "Weather-appropriate", "Best photo spots"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored experiences that showcase the very best of Sichuan Province, from natural wonders to cultural treasures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Customize Your Tour
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;