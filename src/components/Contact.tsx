function Contact() {
  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      details: ["+86 138 0000 0000", "+86 139 0000 0000"],
      description: "Call us anytime for immediate assistance"
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@sichuantours.com", "booking@sichuantours.com"],
      description: "Send us your tour requirements"
    },
    {
      icon: "📍",
      title: "Location",
      details: ["Chengdu, Sichuan Province", "China"],
      description: "Based in the heart of Sichuan"
    },
    {
      icon: "💬",
      title: "WeChat",
      details: ["SichuanTours2024"],
      description: "Connect with us on WeChat"
    }
  ];

  const tourPackages = [
    {
      name: "Classic Sichuan",
      duration: "5 Days",
      price: "From ¥2,800",
      highlights: ["Chengdu", "Leshan Buddha", "Mount Emei", "Panda Base"]
    },
    {
      name: "West Sichuan Adventure",
      duration: "8 Days", 
      price: "From ¥5,200",
      highlights: ["Tibetan Highlands", "Mountain Passes", "Cultural Immersion", "Remote Landscapes"]
    },
    {
      name: "Dujiangyan Heritage",
      duration: "3 Days",
      price: "From ¥1,800",
      highlights: ["UNESCO Site", "Ancient Engineering", "Mountain Views", "Cultural History"]
    },
    {
      name: "Complete Sichuan",
      duration: "12 Days",
      price: "From ¥7,800",
      highlights: ["All Major Sites", "Cultural Immersion", "Food Tours", "Custom Activities"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Adventure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore Sichuan? Contact us today to plan your perfect private car tour experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                    <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Popular Packages */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Popular Tour Packages</h4>
              <div className="space-y-4">
                {tourPackages.map((pkg, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-lg font-semibold text-gray-900">{pkg.name}</h5>
                      <span className="text-red-600 font-bold">{pkg.price}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{pkg.duration}</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, highlightIndex) => (
                        <span 
                          key={highlightIndex}
                          className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-red-50 via-yellow-50 to-red-50 rounded-2xl p-8 border border-yellow-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Plan Your Tour</h3>
            <p className="text-gray-600 mb-8">
              Tell us about your dream Sichuan adventure and we'll create a personalized itinerary just for you.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-yellow-400 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-yellow-400 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-yellow-400 transition-all"
                    placeholder="+86 138 0000 0000"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Travel Dates</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-yellow-400 transition-all"
                    placeholder="When do you want to travel?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Group Size</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-yellow-400 transition-all">
                  <option>1-2 people</option>
                  <option>3-4 people</option>
                  <option>5-6 people</option>
                  <option>7+ people</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Tour Interests</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-yellow-400 transition-all"
                  placeholder="Tell us about your interests: nature, culture, food, photography, etc."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Your Custom Quote
              </button>
            </form>

            <div className="mt-6 text-center text-gray-600">
              <p className="text-sm">
                🔒 Your information is secure and will only be used to create your personalized tour quote
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;