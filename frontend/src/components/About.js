const About = () => {
    const steps = [
      {
        emoji: "🏪",
        title: "Restaurants Register",
        description: "Restaurants sign up and add their food availability.",
      },
      {
        emoji: "🏥",
        title: "NGOs Register",
        description: "NGOs sign up and search for nearby food listings.",
      },
      {
        emoji: "📦",
        title: "Place Orders",
        description: "NGOs place pickup orders from restaurants.",
      },
      {
        emoji: "🤝",
        title: "Food Delivered",
        description: "The food gets picked up and distributed to those in need.",
      },
    ];
  
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">Simple steps to connect food to those who need it</p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row ${
                index % 2 === 1 ? "sm:flex-row-reverse" : ""
              } items-center`}
            >
              <div className="sm:w-1/2 p-6">
                <div className="bg-white p-6 rounded-2xl shadow-xl text-center hover:scale-105 transform transition">
                  <div className="text-5xl mb-4">{step.emoji}</div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
              <div className="sm:w-1/2 h-0 sm:h-12" />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default About;
  