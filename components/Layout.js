// components/Layout.js
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }) {
  return (
    <div className="bg-white text-gray-900">
      <header className="border-b py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="https://numalariamodeling.github.io/FE-2023-quarto-website/numalaria_logo.png" alt="Logo 1" className="h-12" />
            <img src="https://cfs.edu.sn/wp-content/uploads/2021/08/UIDT.png" alt="Logo 2" className="h-12" />
          </div>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              ACCUEIL
            </Link>

            <Link
              href="/handbook"
              className="text-gray-700 hover:text-gray-900"
            >
              MANUEL
            </Link>
            <Link href="/emod" className="text-gray-700 hover:text-gray-900">
              EMOD
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-gray-900"
            >
              RESSOURCES
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-gray-900">
              EVENEMENTS
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              A PROPOS
            </Link>
            <Link href="/contact_us" className="text-gray-700 hover:text-gray-900">
              NOUS CONTACTER
            </Link>


          </nav>
          <div className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </header>

      <main className="py-8 px-4 md:px-8 lg:px-16">{children}</main>

      <footer className="bg-gray-900 text-white py-8 mx-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4"> A PROPOS </h3>
            <p>
              
              Notre objectif à long terme est de former une masse critique de scientifiques en modélisation qui seront capables de concevoir, 
              de développer et de mettre en œuvre des modèles de simulation pour la prise de décision en santé publique.
              
              {" "}
              <a href="#" className="text-yellow-400 underline">
                
                Voir plus
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              LIENS RAPIDES
              </h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  EMOD Papers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Codes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Donnees
                  
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:underline">
                  Science Communication
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              AUTRES LIENS
              
              </h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Documentation EMOD
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  NU Malaria Modeling
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:underline">
                  AMMnet
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              SUIVEZ-NOUS
            </h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-blue-600 hover:text-blue-800">
               
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link href="#" className="text-blue-400 hover:text-blue-600">
               <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link href="#" className="text-red-600 hover:text-red-800">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              
            </div>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />  
               {"    "}naelmansa@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 
                {"    "}UIDT
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> {" "} +221 77 000 00 00
              Thies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
