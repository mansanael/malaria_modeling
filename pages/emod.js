// pages/emod.js
import { useState } from 'react';
import Layout from '../components/Layout';

const sections = [
  {
    title: 'Installation Guide',
    content: `
      <h2 class="text-2xl font-bold mb-4">Installation Methods</h2>
      <p class="mb-4">Below are instructions on how to install emodpy from the terminal, particularly for use on QUEST, or other linux-based clusters. The following instructions are specific to QUEST but can easily be adapted to other clusters or HPCs that use SLURM scheduling.</p>
      <h3 class="text-xl font-bold mb-2">Prerequisites, Login, Load Python</h3>
      <ol class="list-decimal pl-5 mb-4">
        <li>Review prerequisites and recommendations.</li>
        <ul class="list-disc pl-5 mb-4">
          <li><a href="https://docs.idmod.org/projects/idmtools/en/latest/platforms/slurm/index.html#prerequisites" class="text-blue-600 underline">https://docs.idmod.org/projects/idmtools/en/latest/platforms/slurm/index.html#prerequisites</a></li>
          <li><a href="https://docs.idmod.org/projects/idmtools/en/latest/platforms/slurm/index.html#recommendations" class="text-blue-600 underline">https://docs.idmod.org/projects/idmtools/en/latest/platforms/slurm/index.html#recommendations</a></li>
        </ul>
        <li>Login/SSH to Slurm cluster (QUEST). You can either use FastX or directly SSH from terminal prompt, like the following:</li>
        <pre class="bg-gray-100 p-4 rounded mt-2 mb-4">ssh -X <usernamehere>@quest.northwestern.edu</pre>
        <li>Load Python module 3.8.4, at terminal prompt, type the following:</li>
        <pre class="bg-gray-100 p-4 rounded mt-2 mb-4">module load python/3.8.4</pre>
        <p>NOTE: idmtools requires Python 3.7 or higher</p>
        <li>Pull Singularity image containing Python and MPI (used by emodpy-malaria tasks)</li>
        <p>NOTE: this sif file already exists in <code>/projects/b1139/images/dtk_run_rocky_py39.sif</code> and does not need to be pulled again.</p>
      </ol>
    `
  },
  {
    title: 'Simulation Guides',
    content: 'Content for Simulation Guides...'
  },
  {
    title: 'Demographics Guides',
    content: 'Content for Demographics Guides...'
  },
  {
    title: 'Climate Guides',
    content: 'Content for Climate Guides...'
  },
  {
    title: 'Vector Guides',
    content: 'Content for Vector Guides...'
  },
  {
    title: 'Diagnostic Guides',
    content: 'Content for Diagnostic Guides...'
  },
  {
    title: 'Intervention Guides',
    content: 'Content for Intervention Guides...'
  },
  {
    title: 'Report Guides',
    content: 'Content for Report Guides...'
  },
  {
    title: 'Analyzer Guides',
    content: 'Content for Analyzer Guides...'
  },
  {
    title: 'Individual Properties Guides',
    content: 'Content for Individual Properties Guides...'
  },
];

export default function Emod() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row">
          <nav className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">EMOD How-To Guides</h2>
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
            <div className="content" dangerouslySetInnerHTML={{ __html: activeSection.content }} />
          </main>
        </div>
      </div>
    </Layout>
  );
}
