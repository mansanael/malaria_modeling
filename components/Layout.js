// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="bg-white text-gray-900">
      <header className="border-b py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo1.png" alt="Logo 1" className="h-12" />
            <img src="/logo2.png" alt="Logo 2" className="h-12" />
          </div>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
             HOME
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              ABOUT US
            </Link>
            <Link href="/handbook" className="text-gray-700 hover:text-gray-900">PROGRAM HANDBOOK</Link>
            <a href="#" className="text-gray-700 hover:text-gray-900">EMOD</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">MORE</a>
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

      <main className="py-8 px-4 md:px-8 lg:px-16">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
            <p>Our long-term goal is to train a critical mass of modeling scientists who will..... <a href="#" className="text-yellow-400 underline">Readmore</a></p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul>
              <li><a href="#" className="hover:underline">EMOD Papers</a></li>
              <li><a href="#" className="hover:underline">Coding Resources</a></li>
              <li><a href="#" className="hover:underline">Data Sources</a></li>
              <li><a href="#" className="hover:underline">Science Communication</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">OTHER LINKS</h3>
            <ul>
              <li><a href="#" className="hover:underline">EMOD Documentation</a></li>
              <li><a href="#" className="hover:underline">NU Malaria Modeling</a></li>
              <li><a href="#" className="hover:underline">AMMnet</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-red-600 hover:text-red-800"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-blue-900 hover:text-blue-1100"><i className="fab fa-wordpress"></i></a>
            </div>
            <p><i className="fas fa-envelope"></i> feghana24@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Address: PMB 31</p>
            <p><i className="fas fa-map-marker-alt"></i> Ho, Volta region</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
