// pages/index.js
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceRelieved } from '@fortawesome/free-solid-svg-icons'

const slides = [
  {
    title: 'Programme d\'Enrichissement du Corps Professoral en Modélisation du Paludisme 2024',
    description: 'La charge du paludisme reste élevée en Afrique subsaharienne malgré deux décennies d\'intervention intense. L\'analyse régulière et l\'utilisation des données de santé publique mèneront à un contrôle plus efficace grâce à la prise de décision basée sur des preuves.',
    image: '/carousel-image1.png',
  },
  {
    title: 'Un Autre Titre de Diapositive',
    description: 'Une autre description de diapositive.',
    image: '/carousel-image2.png',
  },
  // Ajouter d'autres diapositives si nécessaire
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
                <img src={slide.image} alt={`Diapositive ${index}`} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100"></div>
                <div className="absolute bottom-0 left-0 p-4 bg-opacity-75 bg-white rounded-lg">
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  <p className="text-gray-700 mt-2">{slide.description}</p>
                  <button className="mt-4 bg-black text-white px-6 py-2 rounded-full">EN SAVOIR PLUS</button>
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
          <h2 className="text-purple-500 text-lg font-semibold mb-4">Informations de base sur nous</h2>
          <h3 className="text-3xl font-bold mb-4">Notre objectif à long terme est de former une masse critique de scientifiques spécialisés en modélisation qui sont :</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
            <li>Retenus en Afrique subsaharienne</li>
            <li>Formant la prochaine génération de modélisateurs</li>
            <li>Travaillant en étroite collaboration avec les programmes locaux de lutte contre le paludisme pour fournir un soutien opérationnel</li>
            <li>Compétitifs pour obtenir des subventions des agences de financement internationales</li>
            <li>Étroitement connectés les uns aux autres à travers l'Afrique et avec des partenaires internationaux</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Les points forts de nos programmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-red-600 text-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-laptop-code text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Formation Multi-Modèle</h4>
              <p className="mb-4">Formation multimodale en modélisation appliquée du paludisme</p>
              <a href="#" className="underline">En savoir plus</a>
            </div>
            <div className="bg-teal-600 text-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-comments text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Communication Scientifique</h4>
              <p className="mb-4">Formation à la communication scientifique écrite et orale</p>
              <a href="#" className="underline">En savoir plus</a>
            </div>
            <div className="bg-yellow-600 text-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-user-graduate text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Mentorat Dédié</h4>
              <p className="mb-4">Réunions hebdomadaires en tête-à-tête avec le directeur du programme et les partenaires</p>
              <a href="#" className="underline">En savoir plus</a>
            </div>
            <div className="bg-orange-500 text-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-handshake text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Établir des Connexions</h4>
              <p className="mb-4">Établir des connexions avec une communauté mondiale de modélisateurs du paludisme</p>
              <a href="#" className="underline">En savoir plus</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
