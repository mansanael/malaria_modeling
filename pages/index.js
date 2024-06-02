// pages/index.js
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const slides = [
  {
    title: 'Malaria Modeling Faculty Enrichment Program 2024',
    description: 'Malaria burden remains high in Sub-Saharan Africa despite two decades of intense intervention. Regular analysis and use of public health data will lead to more effective control through evidence-based decision making.',
    image: '/carousel-image1.png',
  },
  {
    title: 'Another Slide Title',
    description: 'Another slide description.',
    image: '/carousel-image2.png',
  },
  // Add more slides as needed
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            {slides.map((slide, index) => (
              <div key={index} className={`w-full h-64 relative ${activeSlide === index ? 'block' : 'hidden'}`}>
                <img src={slide.image} alt={`Slide ${index}`} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100"></div>
                <div className="absolute bottom-0 left-0 p-4 bg-opacity-75 bg-white rounded-lg">
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  <p className="text-gray-700 mt-2">{slide.description}</p>
                  <button className="mt-4 bg-black text-white px-6 py-2 rounded-full">READ MORE</button>
                </div>
              </div>
            ))}
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <button onClick={prevSlide} className="bg-black bg-opacity-50 text-white p-2 rounded-full">
                <i className="fas fa-chevron-left"></i>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <button onClick={nextSlide} className="bg-black bg-opacity-50 text-white p-2 rounded-full">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-purple-500 text-lg font-semibold mb-4">Basic Info about us</h2>
          <h3 className="text-3xl font-bold mb-4">Our long-term goal is to train a critical mass of modeling scientists who are:</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
            <li>Retained within Sub-Saharan Africa</li>
            <li>Training the next generation of modelers</li>
            <li>Working closely with local malaria control programs to provide operational support</li>
            <li>Competitive in obtaining grants from international funding agencies</li>
            <li>Closely networked with each other across Africa and with international partners</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-red-600 text-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-laptop-code text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Multi-Model Training</h4>
              <p className="mb-4">Multi-modal training in applied malaria modeling</p>
              <a href="#" className="underline">Read More</a>
            </div>
            <div className="bg-teal-600 text-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-comments text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Scientific Communication</h4>
              <p className="mb-4">Training in written and oral scientific communication</p>
              <a href="#" className="underline">Read More</a>
            </div>
            <div className="bg-yellow-600 text-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-user-graduate text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Dedicated Mentorship</h4>
              <p className="mb-4">Weekly 1-on-1 meetings with program director and partners</p>
              <a href="#" className="underline">Read More</a>
            </div>
            <div className="bg-orange-500 text-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-handshake text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Building Connections</h4>
              <p className="mb-4">Building connections with a global community of malaria modelers</p>
              <a href="#" className="underline">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
