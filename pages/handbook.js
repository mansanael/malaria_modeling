// pages/handbook.js
import { useState } from 'react';
import Layout from '../components/Layout';

const sections = [
  {
    title: 'Liste de Vérification Pré-Programme',
    content: 'Contenu pour la Liste de Vérification Pré-Programme...'
  },
  {
    title: 'Manuel du Programme',
    content: 'Contenu pour le Manuel du Programme...'
  },
  {
    title: 'Meilleures Pratiques',
    content: 'Contenu pour les Meilleures Pratiques...'
  },
  {
    title: 'Exemples d\'Exercices',
    content: 'Contenu pour les Exemples d\'Exercices...'
  },
  {
    title: 'Club de Journal',
    content: 'Contenu pour le Club de Journal...'
  },
  {
    title: 'Enregistrements des Sessions',
    content: 'Contenu pour les Enregistrements des Sessions...'
  },
];

const milestones = [
  { week: 0, milestone: 'Exercice de Codage Pré-Programme', due: '19 mai 2024' },
  { week: 2, milestone: 'Présentation de la Recherche Introductive', due: '23 mai 2024' },
  { week: 2, milestone: 'Idées d\'Objectifs Spécifiques', due: '31 mai 2024' },
  { week: 3, milestone: 'Premier Brouillon des Objectifs Spécifiques', due: '7 juin 2024' },
  // Ajouter d'autres étapes si nécessaire
];

export default function Handbook() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row">
          <nav className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">Programme 2024</h2>
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
            {activeSection.title === 'Manuel du Programme' && (
              <>
                <h2 className="text-2xl font-bold mb-4">Manuel Complet du Programme 2024</h2>
                <p className="mb-4">Un guide complet du programme de cette année, des devoirs et des objectifs d'apprentissage</p>
                <ul className="mb-4">
                  <li><a href="#" className="text-blue-600 underline">Manuel Complet du Programme 2024</a></li>
                </ul>
                <h3 className="text-2xl font-bold mb-4">Attentes</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li><a href="#" className="text-blue-600 underline">Attentes pour la Page des Objectifs</a></li>
                  <li><a href="#" className="text-blue-600 underline">Attentes pour le Club de Journal</a></li>
                  <li><a href="#" className="text-blue-600 underline">Attentes pour les Présentations</a></li>
                </ul>
                <h3 className="text-2xl font-bold mb-4">Étapes du Programme</h3>
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gray-200 text-gray-700">
                      <th className="w-1/4 px-4 py-2">Semaine</th>
                      <th className="w-1/2 px-4 py-2">Étape</th>
                      <th className="w-1/4 px-4 py-2">Date Limite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {milestones.map((milestone, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-2">{milestone.week}</td>
                        <td className="px-4 py-2">{milestone.milestone}</td>
                        <td className="px-4 py-2">{milestone.due}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}
