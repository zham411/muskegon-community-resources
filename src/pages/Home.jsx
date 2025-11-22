import { ExternalLink, MapPin, Calendar, Package, DollarSign, Info, Mail, Facebook } from 'lucide-react';

import { donationSchedule } from '../data';



export default function Home() {

  // Sort by date (upcoming first)

  const sortedSchedule = [...donationSchedule].sort((a, b) => {

    const dateA = new Date('2025-' + a.date.replace('11/', '11-'));

    const dateB = new Date('2025-' + b.date.replace('11/', '11-'));

    return dateA - dateB;

  });



  return (

    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* Financial Donations Section */}

      <div className="mb-12 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg shadow-lg p-6 border-l-4 border-teal-600">

        <div className="flex items-center space-x-3 mb-4">

          <DollarSign className="h-6 w-6 text-teal-600" />

          <h2 className="text-2xl font-bold text-gray-900">Make a Financial Donation</h2>

        </div>

        <p className="text-gray-700 mb-4">

          Support our mission with a financial contribution:

        </p>

        <div className="space-y-4">

          <div className="bg-white rounded-lg p-4 shadow-md">

            <h3 className="font-semibold text-gray-900 mb-2">Venmo</h3>

            <a
              href="https://venmo.com/u/FeedINGtheLakeshore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-mono text-lg hover:text-teal-800 transition-colors inline-flex items-center space-x-2"
            >
              <span>@FeedINGtheLakeshore</span>
              <ExternalLink className="h-4 w-4" />
            </a>

          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">

            <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
              <Mail className="h-5 w-5 text-teal-600" />
              <span>Contact Us</span>
            </h3>

            <a
              href="mailto:FeedINGtheLakeshore@gmail.com"
              className="text-teal-600 hover:text-teal-800 transition-colors"
            >
              FeedINGtheLakeshore@gmail.com
            </a>

          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">

            <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
              <Facebook className="h-5 w-5 text-teal-600" />
              <span>Follow Us on Facebook</span>
            </h3>

            <a
              href="https://www.facebook.com/people/Indy-Next-Gen/61578232028482/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-800 transition-colors inline-flex items-center space-x-2"
            >
              <span>Indy Next Gen</span>
              <ExternalLink className="h-4 w-4" />
            </a>

          </div>

        </div>

      </div>



      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">

          Where We Will Be

        </h1>

        <p className="text-gray-600">

          Find donation drop-off locations throughout Muskegon County

        </p>

      </div>



      {/* Info Banner */}
      <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-blue-900 mb-1">About Donation Boxes</p>
            <p className="text-sm text-blue-800">
              All donation boxes are <strong>available for 2 weeks</strong> starting on the date listed. 
              Some locations have <strong>kickoff events</strong> on the start date with specific times—these are special events, 
              but you can still drop off donations anytime during the 2-week period.
            </p>
          </div>
        </div>
      </div>



      {/* Desktop Table */}

      <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-lg">

        <table className="min-w-full divide-y divide-gray-200">

          <thead className="bg-teal-600 text-white">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold">Business</th>

              <th className="px-6 py-4 text-left text-sm font-semibold">Organization</th>

              <th className="px-6 py-4 text-left text-sm font-semibold">Needs</th>

              <th className="px-6 py-4 text-left text-sm font-semibold">Starts</th>

              <th className="px-6 py-4 text-left text-sm font-semibold">Availability & Events</th>

            </tr>

          </thead>

          <tbody className="divide-y divide-gray-200">

            {sortedSchedule.map((item) => (

              <tr key={item.id} className="hover:bg-gray-50 transition-colors">

                <td className="px-6 py-4">

                  <div className="flex items-center space-x-2">

                    <span className="font-medium text-gray-900">{item.business}</span>

                    {item.mapUrl && (

                      <a

                        href={item.mapUrl}

                        target="_blank"

                        rel="noopener noreferrer"

                        className="text-teal-600 hover:text-teal-800 transition-colors"

                        title="Open in Google Maps"

                      >

                        <ExternalLink className="h-4 w-4" />

                      </a>

                    )}

                  </div>

                </td>

                <td className="px-6 py-4 text-gray-700">{item.organization}</td>

                <td className="px-6 py-4 text-gray-700">{item.needs}</td>

                <td className="px-6 py-4">

                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">

                    {item.date}

                  </span>

                  <p className="text-xs text-gray-500 mt-1">Available for 2 weeks</p>

                </td>

                <td className="px-6 py-4">

                  {item.time.includes('Kickoff event') ? (

                    <div className="space-y-2">

                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">

                        Kickoff Event: {item.time.replace('Donation Box Kickoff event ', '')}

                      </span>

                      <p className="text-xs text-gray-600">Box also available for 2 weeks</p>

                    </div>

                  ) : item.time === 'Donation Box' ? (

                    <p className="text-gray-700">Available now through 2 weeks</p>

                  ) : (

                    <p className="text-gray-700">{item.time}</p>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>



      {/* Mobile Cards */}

      <div className="md:hidden space-y-4">

        {sortedSchedule.map((item) => (

          <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 space-y-4">

            <div>

              <div className="flex items-center justify-between mb-2">

                <h3 className="text-lg font-bold text-gray-900">{item.business}</h3>

                {item.mapUrl && (

                  <a

                    href={item.mapUrl}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="inline-flex items-center space-x-1 bg-teal-600 text-white px-3 py-1 rounded-full text-sm hover:bg-teal-700 transition-colors"

                  >

                    <MapPin className="h-4 w-4" />

                    <span>Directions</span>

                  </a>

                )}

              </div>

              <p className="text-gray-600 text-sm">{item.organization}</p>

            </div>



            <div className="space-y-2">

              <div className="flex items-start space-x-2">

                <Package className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />

                <div>

                  <p className="text-xs font-semibold text-gray-500 uppercase">Needs</p>

                  <p className="text-sm text-gray-700">{item.needs}</p>

                </div>

              </div>



              <div className="flex items-start space-x-2">

                <Calendar className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />

                <div className="flex-1">

                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Starts {item.date}</p>

                  {item.time.includes('Kickoff event') ? (

                    <div className="space-y-1">

                      <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">

                        Kickoff: {item.time.replace('Donation Box Kickoff event ', '')}

                      </span>

                      <p className="text-xs text-gray-600">Available for 2 weeks starting {item.date}</p>

                    </div>

                  ) : item.time === 'Donation Box' ? (

                    <p className="text-xs text-gray-700">Available for 2 weeks</p>

                  ) : (

                    <p className="text-xs text-gray-700">{item.time}</p>

                  )}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

