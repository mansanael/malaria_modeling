// pages/events.js
import { useState } from 'react';
import Layout from '../components/Layout';

const events = [
  {
    date: 'May 20 @ 8:00 am - September 20 @ 5:00 pm',
    title: 'Malaria Modeling Faculty Enrichment Program 2024',
    location: 'Fred N. Binka School of Public Health, University of Health and Allied Sciences, Ghana Ho, UHAS, Volta Region, Ghana',
    description: 'The intensive training workshop in applied malaria modeling is designed to empower African scientists with the skills and knowledge necessary to tackle malaria through advanced mathematical modeling techniques...',
    image: '/path-to-your-image.png'
  },
  // Add more events as needed
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
            <h1 className="text-3xl font-bold mb-6">Archives Events</h1>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search for events"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4 flex justify-between items-center">
              <button className="bg-gray-200 px-4 py-2 rounded">Today</button>
              <select className="bg-gray-200 px-4 py-2 rounded">
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
              <div className="flex space-x-2">
                <button className="bg-gray-200 px-4 py-2 rounded">List</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Month</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Day</button>
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
              <p>No events found</p>
            )}
            <div className="flex justify-between mt-8">
              <button className="bg-gray-200 px-4 py-2 rounded">Previous Events</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Subscribe to calendar</button>
              <button className="bg-gray-200 px-4 py-2 rounded">Next Events</button>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
