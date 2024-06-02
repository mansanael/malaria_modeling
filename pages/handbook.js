// pages/handbook.js
import { useState } from 'react';
import Layout from '../components/Layout';

const sections = [
  {
    title: 'Pre-Program Checklist',
    content: 'Content for Pre-Program Checklist...'
  },
  {
    title: 'Program Handbook',
    content: 'Content for Program Handbook...'
  },
  {
    title: 'Best Practices',
    content: 'Content for Best Practices...'
  },
  {
    title: 'Example Exercises',
    content: 'Content for Example Exercises...'
  },
  {
    title: 'Journal Club',
    content: 'Content for Journal Club...'
  },
  {
    title: 'Session Recordings',
    content: 'Content for Session Recordings...'
  },
];

const milestones = [
  { week: 0, milestone: 'Pre-Program Coding Assignment', due: 'May 19, 2024' },
  { week: 2, milestone: 'Introductory Research Talk', due: 'May 23, 2024' },
  { week: 2, milestone: 'Specific Aims Ideas', due: 'May 31, 2024' },
  { week: 3, milestone: 'Specific Aims Outline #1', due: 'June 7, 2024' },
  // Add more milestones as needed
];

export default function Handbook() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row">
          <nav className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">2024 Program</h2>
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
            {activeSection.title === 'Program Handbook' && (
              <>
                <h2 className="text-2xl font-bold mb-4">Full 2024 Program Handbook</h2>
                <p className="mb-4">A comprehensive guide to this year’s curriculum, assignments, and learning objectives</p>
                <ul className="mb-4">
                  <li><a href="#" className="text-blue-600 underline">Full 2024 Program Handbook</a></li>
                </ul>
                <h3 className="text-2xl font-bold mb-4">Expectations</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li><a href="#" className="text-blue-600 underline">Aims Page Expectations</a></li>
                  <li><a href="#" className="text-blue-600 underline">Expectations for Journal Club</a></li>
                  <li><a href="#" className="text-blue-600 underline">Presentation Expectations</a></li>
                </ul>
                <h3 className="text-2xl font-bold mb-4">Program Milestones</h3>
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gray-200 text-gray-700">
                      <th className="w-1/4 px-4 py-2">Week</th>
                      <th className="w-1/2 px-4 py-2">Milestone</th>
                      <th className="w-1/4 px-4 py-2">Due</th>
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
