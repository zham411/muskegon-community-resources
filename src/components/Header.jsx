import { Menu } from 'lucide-react';



export default function Header({ onMenuClick }) {

  return (

    <header className="bg-gradient-to-r from-terracotta-600 to-terracotta-700 text-white shadow-lg">

      <div className="flex items-center justify-between px-4 py-4">

        <div className="flex items-center space-x-4">

          <button

            onClick={onMenuClick}

            className="lg:hidden p-2 rounded-md hover:bg-terracotta-500 transition-colors"

            aria-label="Open menu"

          >

            <Menu className="h-6 w-6" />

          </button>

          <img 
            src="/logo.jpeg" 
            alt="Feeding The Lakeshore Logo" 
            className="h-10 md:h-12 w-auto"
          />

          <h1 className="text-xl md:text-2xl font-bold">Feeding The Lakeshore</h1>

        </div>

      </div>

    </header>

  );

}

