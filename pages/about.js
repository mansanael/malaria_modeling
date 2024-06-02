// pages/about.js
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <img src="/mission-image.png" alt="Mission Image" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold mb-4">Our Missions</h2>
            <p className="text-gray-700 mb-4">Malaria burden remains high in Sub-Saharan Africa despite two decades of intense intervention. Regular analysis and use of public health data will lead to more effective control through evidence-based decision making.</p>
            <h3 className="text-2xl font-bold mb-4">Our long-term goal is to train a critical mass of modeling scientists who are:</h3>
            <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
              <li>Retained within Sub-Saharan Africa</li>
              <li>Training the next generation of modelers</li>
              <li>Working closely with local malaria control programs to provide operational support</li>
              <li>Competitive in obtaining grants from international funding agencies</li>
              <li>Closely networked with each other across Africa and with international partners</li>
            </ul>
            <p className="text-gray-700 mb-4">To help achieve this goal, Northwestern University’s malaria modeling team is offering an 18-week intensive in-person training program in applied malaria modeling for Sub-Saharan African mathematical modeling faculty – with or without public health backgrounds – tailored to their experience and needs.</p>
            <p className="text-gray-700">Training is focused on applied modeling with EMOD, an open-source malaria transmission modeling software that is currently used to support malaria programs. Participants will design their own research question and focal training project using EMOD that will form the basis of a Specific Aims page (grant proposal summary page) to be developed during the program.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-ruler-combined text-4xl text-purple-600"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Multi-Modal Training</h4>
              <p className="text-gray-700 mb-4">Multi-modal training in applied malaria modeling - Hands-on tutorials and exercises focused on model configuration and analysis, supplemented by lectures and journal clubs, to enable participants to independently carry out their focal projects. Participants will run models using Northwestern’s high performance computing cluster.</p>
              <a href="#" className="text-purple-600 underline">Read More</a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-file-alt text-4xl text-pink-600"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Scientific Communication</h4>
              <p className="text-gray-700 mb-4">Training in written and oral scientific communication - Iterative revisions of draft documents and oral presentations, with feedback from program director, peers, and other Northwestern modelers.</p>
              <a href="#" className="text-pink-600 underline">Read More</a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-user-friends text-4xl text-yellow-600"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Dedicated Mentorship</h4>
              <p className="text-gray-700 mb-4">Weekly 1-on-1 meetings with program director and an assigned partner from Northwestern’s team of modelers.</p>
              <a href="#" className="text-yellow-600 underline">Read More</a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-network-wired text-4xl text-blue-600"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Building Connections</h4>
              <p className="text-gray-700 mb-4">Building connections with a global community of malaria modelers - Join and participation in the Applied Malaria Modeling Network (AMMnet). Connect with faculty enrichment program alumni.</p>
              <a href="#" className="text-blue-600 underline">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
