import { Link, useLocation } from 'react-router-dom';

import { Home, Users, MapPin, Calendar, X, QrCode } from 'lucide-react';



export default function Sidebar({ isOpen, onClose }) {

  const location = useLocation();

  

  const navigation = [

    { name: 'Home', href: '/', icon: Home },

    { name: 'Organizations', href: '/organizations', icon: Users },

    { name: 'Local Pantries', href: '/pantries', icon: MapPin },

    { name: 'Feeding America Schedule', href: '/feeding-america', icon: Calendar },

    { name: 'QR Code', href: '/qr-code', icon: QrCode },

  ];



  const isActive = (path) => location.pathname === path;



  return (

    <>

      {/* Overlay */}

      {isOpen && (

        <div

          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"

          onClick={onClose}

        />

      )}



      {/* Sidebar */}

      <aside

        className={`

          fixed lg:static inset-y-0 left-0 z-50

          transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}

          lg:translate-x-0 transition-transform duration-300 ease-in-out

          w-64 bg-white shadow-xl

        `}

      >

        <div className="h-full flex flex-col">

          {/* Close button for mobile */}

          <div className="lg:hidden flex justify-end p-4">

            <button

              onClick={onClose}

              className="p-2 rounded-md hover:bg-gray-100 transition-colors"

              aria-label="Close menu"

            >

              <X className="h-6 w-6 text-gray-600" />

            </button>

          </div>



          {/* Navigation */}

          <nav className="flex-1 px-4 py-6 space-y-2">

            {navigation.map((item) => {

              const Icon = item.icon;

              return (

                <Link

                  key={item.name}

                  to={item.href}

                  onClick={() => onClose()}

                  className={`

                    flex items-center space-x-3 px-4 py-3 rounded-lg

                    transition-all duration-200

                    ${

                      isActive(item.href)

                        ? 'bg-teal-100 text-teal-800 font-semibold shadow-sm'

                        : 'text-gray-700 hover:bg-gray-100 hover:text-teal-700'

                    }

                  `}

                >

                  <Icon className="h-5 w-5" />

                  <span>{item.name}</span>

                </Link>

              );

            })}

          </nav>



          {/* Footer */}

          <div className="p-4 border-t border-gray-200">

            <p className="text-xs text-gray-500 text-center">

              Feeding The Lakeshore

              <br />

              © 2025

            </p>

          </div>

        </div>

      </aside>

    </>

  );

}

