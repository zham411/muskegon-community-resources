import { Phone, Mail, ExternalLink, Clock, MapPin, AlertCircle } from 'lucide-react';

import { muskegonPantries, ottawaPantries } from '../data';



function PantryCard({ pantry }) {

  return (

    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">

      <h3 className="text-lg font-bold text-teal-700 mb-3">{pantry.name}</h3>

      

      <div className="space-y-2 text-sm">

        {pantry.address && (

          <div className="flex items-start space-x-2">

            <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />

            <span className="text-gray-700">{pantry.address}</span>

          </div>

        )}

        

        {pantry.locations && (

          <div className="flex items-start space-x-2">

            <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />

            <span className="text-gray-700">{pantry.locations}</span>

          </div>

        )}

        

        {pantry.phone && (

          <div className="flex items-center space-x-2">

            <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />

            <a href={`tel:${pantry.phone}`} className="text-teal-600 hover:text-teal-800">

              {pantry.phone}

            </a>

          </div>

        )}

        

        {pantry.email && (

          <div className="flex items-center space-x-2">

            <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />

            <a href={`mailto:${pantry.email}`} className="text-teal-600 hover:text-teal-800">

              {pantry.email}

            </a>

          </div>

        )}

        

        {pantry.hours && (

          <div className="flex items-start space-x-2">

            <Clock className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />

            <div>

              <p className="font-semibold text-gray-700">Service Hours:</p>

              <p className="text-gray-600">{pantry.hours}</p>

            </div>

          </div>

        )}

        

        {pantry.notes && (

          <div className="flex items-start space-x-2 bg-yellow-50 p-3 rounded-md">

            <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />

            <p className="text-gray-700 text-xs">{pantry.notes}</p>

          </div>

        )}

        

        {pantry.website && (

          <a

            href={pantry.website}

            target="_blank"

            rel="noopener noreferrer"

            className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-800 transition-colors mt-2"

          >

            <ExternalLink className="h-4 w-4" />

            <span className="font-medium">Visit Website</span>

          </a>

        )}

      </div>

    </div>

  );

}



export default function LocalPantries() {

  return (

    <div className="max-w-7xl mx-auto px-4 py-8">

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">

          Local Food Pantries

        </h1>

        <p className="text-gray-600">

          Find food assistance in Muskegon and Ottawa Counties

        </p>

      </div>



      {/* Muskegon County */}

      <div className="mb-12">

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-4 rounded-t-lg">

          <h2 className="text-2xl font-bold">Muskegon County Food Pantries</h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">

          {muskegonPantries.map((pantry, index) => (

            <PantryCard key={index} pantry={pantry} />

          ))}

        </div>

      </div>



      {/* Ottawa County */}

      <div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-4 rounded-t-lg">

          <h2 className="text-2xl font-bold">Ottawa County Food Pantries</h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">

          {ottawaPantries.map((pantry, index) => (

            <PantryCard key={index} pantry={pantry} />

          ))}

        </div>

      </div>

    </div>

  );

}

