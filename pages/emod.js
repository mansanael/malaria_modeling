// pages/emod.js
import { useState } from 'react';
import Layout from '../components/Layout';

const sections = [
  {
    title: 'Guide d\'Installation',
    content: `
      <h2 class="text-2xl font-bold mb-4">Méthodes d'Installation</h2>
      <p class="mb-4">Voici des instructions sur la façon d'installer emodpy depuis le terminal, en particulier pour une utilisation sur QUEST ou d'autres clusters basés sur Linux. Les instructions suivantes sont spécifiques à QUEST mais peuvent facilement être adaptées à d'autres clusters ou HPC utilisant la planification SLURM.</p>
      <h3 class="text-xl font-bold mb-2">Prérequis, Connexion, Chargement de Python</h3>
      <ol class="list-decimal pl-5 mb-4">
        <li>Consultez les prérequis et recommandations.</li>
        <ul class="list-disc pl-5 mb-4">
          <li><a href="https://docs.idmod.org/projects/idmtools/en/latest/platforms/slurm/index.html#prerequisites" class="text-blue-600 underline">https://docs.idmod.org/projects/idmtools/en/latest/platforms/slurm/index.html#prerequisites</a></li>
          <li><a href="https://docs.idmod.org/projects/idmtools/en/latest/platforms/slurm/index.html#recommendations" class="text-blue-600 underline">https://docs.idmod.org/projects/idmtools/en/latest/platforms/slurm/index.html#recommendations</a></li>
        </ul>
        <li>Connectez-vous/SSH au cluster Slurm (QUEST). Vous pouvez soit utiliser FastX soit directement SSH depuis l'invite de terminal, comme suit :</li>
        <pre class="bg-gray-100 p-4 rounded mt-2 mb-4">ssh -X <usernamehere>@quest.northwestern.edu</pre>
        <li>Chargez le module Python 3.8.4, à l'invite de terminal, tapez ce qui suit :</li>
        <pre class="bg-gray-100 p-4 rounded mt-2 mb-4">module load python/3.8.4</pre>
        <p>NOTE : idmtools nécessite Python 3.7 ou une version supérieure</p>
        <li>Tirez l'image Singularity contenant Python et MPI (utilisée par les tâches emodpy-malaria)</li>
        <p>NOTE : ce fichier sif existe déjà dans <code>/projects/b1139/images/dtk_run_rocky_py39.sif</code> et n'a pas besoin d'être tiré à nouveau.</p>
      </ol>
    `
  },
  {
    title: 'Guides de Simulation',
    content: 'Contenu pour les Guides de Simulation...'
  },
  {
    title: 'Guides Démographiques',
    content: 'Contenu pour les Guides Démographiques...'
  },
  {
    title: 'Guides Climatiques',
    content: 'Contenu pour les Guides Climatiques...'
  },
  {
    title: 'Guides des Vecteurs',
    content: 'Contenu pour les Guides des Vecteurs...'
  },
  {
    title: 'Guides Diagnostiques',
    content: 'Contenu pour les Guides Diagnostiques...'
  },
  {
    title: 'Guides d\'Intervention',
    content: 'Contenu pour les Guides d\'Intervention...'
  },
  {
    title: 'Guides de Rapports',
    content: 'Contenu pour les Guides de Rapports...'
  },
  {
    title: 'Guides des Analyseurs',
    content: 'Contenu pour les Guides des Analyseurs...'
  },
  {
    title: 'Guides des Propriétés Individuelles',
    content: 'Contenu pour les Guides des Propriétés Individuelles...'
  },
];

export default function Emod() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row">
          <nav className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">Guides EMOD</h2>
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
