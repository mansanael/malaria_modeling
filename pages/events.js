// pages/events.js
import { useState } from 'react';
import Layout from '../components/Layout';

const events = [
  {
    date: '20 mai @ 8:00 am - 20 septembre @ 5:00 pm',
    title: 'Programme d\'Enrichissement du Corps Professoral en Modélisation du Paludisme 2024',
    location: 'École de Santé Publique Fred N. Binka, Université des Sciences de la Santé et Alliées, Ho, UHAS, Région Volta, Ghana',
    description: 'L\'atelier de formation intensive en modélisation appliquée du paludisme est conçu pour donner aux scientifiques africains les compétences et les connaissances nécessaires pour lutter contre le paludisme grâce à des techniques avancées de modélisation mathématique...',
    image: 'https://media.path.org/images/IMG_8144_1.max-1200x800.jpg'
  },
  // Ajouter plus d'événements si nécessaire
];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = events.filter((e) =>
      e.title.toLowerCase().includes(term) ||
      e.location.toLowerCase().includes(term) ||
      e.description.toLowerCase().includes(term)
    );
    setFilteredEvents(filtered);
  };

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row">
          <main className="w-full">
            <h1 className="text-3xl font-bold mb-6">Événements Archivés</h1>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Rechercher des événements"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-2 border arrondi"
              />
            </div>
            <div className="mb-4 flex justify-between items-center">
              <button className="bg-gray-200 px-4 py-2 rounded">Aujourd'hui</button>
              <select className="bg-gray-200 px-4 py-2 rounded">
                <option value="upcoming">À venir</option>
                <option value="past">Passé</option>
              </select>
              <div className="flex space-x-2">
                <button className="bg-gray-200 px-4 py-2 rounded">Liste</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Mois</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Jour</button>
              </div>
            </div>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <div key={index} className="mb-8 flex">
                  <div className="w-1/4">
                    <p className="text-lg font-bold text-gray-700">{event.date}</p>
                  </div>
                  <div className="w-3/4">
                    <h2 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h2>
                    <p className="text-gray-700 mb-2">{event.location}</p>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <img src={event.image} alt={event.title} className="rounded-lg shadow-lg w-full h-auto"/>
                  </div>
                </div>
              ))
            ) : (
              <p>Aucun événement trouvé</p>
            )}
            <div className="flex justify-between mt-8">
              <button className="bg-gray-200 px-4 py-2 rounded">Événements Précédents</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">S'abonner au calendrier</button>
              <button className="bg-gray-200 px-4 py-2 rounded">Événements Suivants</button>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
