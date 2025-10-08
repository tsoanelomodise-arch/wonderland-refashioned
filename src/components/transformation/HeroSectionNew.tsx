import { useEffect, useState } from "react";

const heroImages = [
  "https://sa-transformationfund.co.za/uat/images2/pink_green_clothes_.jpg",
  "https://sa-transformationfund.co.za/uat/images2/chickenslady.jpg",
  "https://sa-transformationfund.co.za/uat/images2/Hands.jpg",
  "https://sa-transformationfund.co.za/uat/images2/black_arrow.jpg"
];

const HeroSectionNew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative text-white pt-16 lg:pt-20 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`parallax-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            Engineering an Inclusive Microeconomic Foundation
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg max-w-4xl mx-auto">
            For Macroeconomic Growth and Social Stability
          </p>
          <p className="text-lg md:text-xl mb-12 drop-shadow-lg max-w-3xl mx-auto">
            South Africa's national platform pooling resources to create systemic impact for inclusive economic growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#why" 
              className="bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition-all inline-block"
            >
              Learn More
            </a>
            <a 
              href="https://nefonlineportal-ckbydma2ace2hkdq.southafricanorth-01.azurewebsites.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-all inline-block"
            >
              Access Portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;