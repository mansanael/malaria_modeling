// pages/resources.js
import { useState } from 'react';
import Layout from '../components/Layout';

const sections = [
  {
    title: 'Articles EMOD',
    content: 'Contenu pour les Articles EMOD...'
  },
  {
    title: 'Ressources de Codage',
    content: 'Contenu pour les Ressources de Codage...'
  },
  {
    title: 'Sources de Données',
    content: 'Contenu pour les Sources de Données...'
  },
  {
    title: 'Communication Scientifique',
    content: 'Contenu pour la Communication Scientifique...'
  },
];

export default function Resources() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row">
          <nav className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">Ressources Supplémentaires</h2>
            <ul className="space-y-2">
              {sections.map((section, index) => (
                <li key={index}>
                  <button 
                    onClick={() => setActiveSection(section)} 
                    className={`text-gray-700 hover:text-gray-900 ${activeSection.title === section.title ? 'font-bold' : ''}`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <main className="w-full md:w-3/4">
            <h1 className="text-3xl font-bold mb-6">{activeSection.title}</h1>
            <p className="mb-4">{activeSection.content}</p>
          </main>
        </div>
      </div>
    </Layout>
  );
}
