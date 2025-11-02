import { Menu } from 'lucide-react';



export default function Header({ onMenuClick }) {

  return (

    <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg">

      <div className="flex items-center justify-between px-4 py-4">

        <div className="flex items-center space-x-4">

          <button

            onClick={onMenuClick}

            className="lg:hidden p-2 rounded-md hover:bg-teal-500 transition-colors"

            aria-label="Open menu"

          >

            <Menu className="h-6 w-6" />

          </button>

          <h1 className="text-xl md:text-2xl font-bold">Muskegon Community Resources</h1>

        </div>

      </div>

    </header>

  );

}

