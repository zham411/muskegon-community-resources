import { ExternalLink } from 'lucide-react';

import { organizations } from '../data';



export default function Organizations() {

  return (

    <div className="max-w-7xl mx-auto px-4 py-8">

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">

          Partner Organizations

        </h1>

        <p className="text-gray-600">

          Learn more about the organizations we support

        </p>

      </div>



      <div className="grid gap-6 md:grid-cols-2">

        {organizations.map((org, index) => (

          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">

            <h2 className="text-xl font-bold text-teal-700 mb-3">{org.name}</h2>

            <p className="text-gray-700 mb-4 leading-relaxed">{org.description}</p>

            

            <div className="space-y-2">

              {org.website && (

                <a

                  href={org.website}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-800 transition-colors"

                >

                  <ExternalLink className="h-4 w-4" />

                  <span className="text-sm font-medium">Visit Website</span>

                </a>

              )}

              

              {org.donationLink && (

                <>

                  <br />

                  <a

                    href={org.donationLink}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-800 transition-colors"

                  >

                    <ExternalLink className="h-4 w-4" />

                    <span className="text-sm font-medium">Donate Online</span>

                  </a>

                </>

              )}

              

              {org.feedingAmericaId && (

                <div className="mt-2 text-sm text-gray-600">

                  <span className="font-semibold">Feeding America ID:</span> {org.feedingAmericaId}

                </div>

              )}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

