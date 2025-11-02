import { Calendar, MapPin, ExternalLink, Users } from 'lucide-react';

import { rrfmInfo } from '../data';



export default function RRFM() {

  return (

    <div className="max-w-5xl mx-auto px-4 py-8">

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">

          Really Really Free Market

        </h1>

        <p className="text-gray-600">

          A community event where everything is free!

        </p>

      </div>



      <div className="grid md:grid-cols-2 gap-8 mb-8">

        {/* Event Details */}

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">

          <h2 className="text-2xl font-bold text-teal-700 mb-4">Event Details</h2>

          

          <div className="flex items-center space-x-3">

            <Calendar className="h-6 w-6 text-teal-600 flex-shrink-0" />

            <div>

              <p className="text-sm font-semibold text-gray-500">Dates</p>

              <p className="text-lg font-bold text-gray-900">{rrfmInfo.dates}</p>

            </div>

          </div>



          <div className="flex items-center space-x-3">

            <Calendar className="h-6 w-6 text-teal-600 flex-shrink-0" />

            <div>

              <p className="text-sm font-semibold text-gray-500">Time</p>

              <p className="text-lg font-bold text-gray-900">{rrfmInfo.time}</p>

            </div>

          </div>



          <div className="flex items-start space-x-3">

            <MapPin className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />

            <div>

              <p className="text-sm font-semibold text-gray-500">Location</p>

              <p className="text-lg font-bold text-gray-900">{rrfmInfo.location}</p>

            </div>

          </div>



          <div className="flex items-start space-x-3">

            <Users className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />

            <div>

              <p className="text-sm font-semibold text-gray-500">Items Available</p>

              <p className="text-gray-700">{rrfmInfo.itemsAvailable}</p>

            </div>

          </div>

        </div>



        {/* About */}

        <div className="bg-white rounded-lg shadow-lg p-6">

          <h2 className="text-2xl font-bold text-teal-700 mb-4">About RRFM</h2>

          <p className="text-gray-700 leading-relaxed mb-4">{rrfmInfo.description}</p>

          

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">

            <p className="text-sm text-gray-700">{rrfmInfo.facebookNote}</p>

          </div>



          <div className="space-y-3">

            <a

              href={rrfmInfo.volunteerUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"

            >

              <Users className="h-5 w-5" />

              <span>Volunteer</span>

              <ExternalLink className="h-4 w-4" />

            </a>



            <a

              href={rrfmInfo.paypalUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"

            >

              <span>Donate via PayPal</span>

              <ExternalLink className="h-4 w-4" />

            </a>

          </div>

        </div>

      </div>



      {/* Event Flyer */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">Event Flyer</h2>
        <div className="flex justify-center">
          <img 
            src="/rrfm.png" 
            alt="Really Really Free Market Event Flyer" 
            className="max-w-full h-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="bg-gray-100 rounded-lg p-8 text-center" style={{ display: 'none' }}>
            <p className="text-gray-600">
              Image not found. Please add the RRFM flyer image to <code className="bg-gray-200 px-2 py-1 rounded">public/rrfm.png</code>
            </p>
          </div>
        </div>
      </div>

    </div>

  );

}

