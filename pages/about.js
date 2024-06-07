// pages/about.js
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="py-16 bg-gray-50 w-2/3 mx-auto"  >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <img src="https://targetmalaria.org/wp-content/uploads/2020/07/ug_people.jpg" alt="Image de la Mission" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold mb-4">Nos Missions</h2>
            <p className="text-gray-700 mb-4">La charge du paludisme reste élevée en Afrique subsaharienne malgré deux décennies d'interventions intenses. L'analyse régulière et l'utilisation des données de santé publique mèneront à un contrôle plus efficace grâce à la prise de décision basée sur des preuves.</p>
            <h3 className="text-2xl font-bold mb-4">Notre objectif à long terme est de former une masse critique de scientifiques spécialisés en modélisation qui sont :</h3>
            <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
              <li>Retenus en Afrique subsaharienne</li>
              <li>Formant la prochaine génération de modélisateurs</li>
              <li>Travaillant en étroite collaboration avec les programmes locaux de lutte contre le paludisme pour fournir un soutien opérationnel</li>
              <li>Compétitifs pour obtenir des subventions des agences de financement internationales</li>
              <li>Étroitement connectés les uns aux autres à travers l'Afrique et avec des partenaires internationaux</li>
            </ul>
            <p className="text-gray-700 mb-4">Pour aider à atteindre cet objectif, l'équipe de modélisation du paludisme de l'Université Northwestern offre un programme de formation intensif en présentiel de 18 semaines en modélisation appliquée du paludisme pour les enseignants-chercheurs en modélisation mathématique d'Afrique subsaharienne - avec ou sans expérience en santé publique - adapté à leur expérience et à leurs besoins.</p>
            <p className="text-gray-700">La formation est axée sur la modélisation appliquée avec EMOD, un logiciel open-source de modélisation de la transmission du paludisme actuellement utilisé pour soutenir les programmes de lutte contre le paludisme. Les participants concevront leur propre question de recherche et projet de formation focal utilisant EMOD, qui formera la base d'une page d'objectifs spécifiques (résumé de proposition de subvention) à développer pendant le programme.</p>
          </div>
        </div>
      </section>

      <section className="py-16 w-2/3 mx-auto ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Points Forts du Programme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-ruler-combined text-4xl text-purple-600"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Formation Multimodale</h4>
              <p className="text-gray-700 mb-4">Formation multimodale en modélisation appliquée du paludisme - Tutoriels pratiques et exercices axés sur la configuration et l'analyse des modèles, complétés par des conférences et des clubs de journaux, pour permettre aux participants de réaliser indépendamment leurs projets focaux. Les participants exécuteront des modèles en utilisant le cluster de calcul haute performance de Northwestern.</p>
              <a href="#" className="text-purple-600 underline">En savoir plus</a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-file-alt text-4xl text-pink-600"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Communication Scientifique</h4>
              <p className="text-gray-700 mb-4">Formation à la communication scientifique écrite et orale - Révisions itératives des documents de brouillon et des présentations orales, avec des retours du directeur du programme, des pairs et d'autres modélisateurs de Northwestern.</p>
              <a href="#" className="text-pink-600 underline">En savoir plus</a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-user-friends text-4xl text-yellow-600"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Mentorat Dédié</h4>
              <p className="text-gray-700 mb-4">Réunions hebdomadaires en tête-à-tête avec le directeur du programme et un partenaire assigné de l'équipe de modélisateurs de Northwestern.</p>
              <a href="#" className="text-yellow-600 underline">En savoir plus</a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-network-wired text-4xl text-blue-600"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Établir des Connexions</h4>
              <p className="text-gray-700 mb-4">Établir des connexions avec une communauté mondiale de modélisateurs du paludisme - Rejoindre et participer au Réseau de Modélisation Appliquée du Paludisme (AMMnet). Se connecter avec les anciens élèves du programme d'enrichissement des enseignants.</p>
              <a href="#" className="text-blue-600 underline">En savoir plus</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
