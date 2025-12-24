import { MapPin, Clock, Calendar } from 'lucide-react';

import { feedingAmericaSchedule } from '../data';



function ScheduleEvent({ event }) {

  return (

    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">

      <div className="flex items-start justify-between mb-3">

        <div>

          <div className="flex items-center space-x-2 mb-1">

            <Clock className="h-4 w-4 text-terracotta-600" />

            <span className="font-bold text-gray-900">{event.time}</span>

          </div>

          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${

            event.type === 'Walk Up' 

              ? 'bg-blue-100 text-blue-800' 

              : 'bg-green-100 text-green-800'

          }`}>

            {event.type}

          </span>

        </div>

        <a

          href={event.mapUrl}

          target="_blank"

          rel="noopener noreferrer"

          className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1"

        >

          <MapPin className="h-4 w-4" />

          <span>Directions</span>

        </a>

      </div>

      

      <h4 className="font-semibold text-gray-900 mb-1">{event.location}</h4>

      <p className="text-sm text-gray-600">{event.address}</p>

    </div>

  );

}



function CountySchedule({ title, schedule }) {

  return (

    <div className="mb-12">

      <div className="bg-gradient-to-r from-terracotta-600 to-terracotta-700 text-white px-6 py-4 rounded-t-lg">

        <h2 className="text-2xl font-bold">{title}</h2>

      </div>

      

      <div className="bg-white rounded-b-lg shadow-lg p-6 space-y-6">

        {schedule.map((day, index) => (

          <div key={index}>

            <div className="flex items-center space-x-2 mb-4 pb-2 border-b-2 border-cream-200">

              <Calendar className="h-5 w-5 text-terracotta-600" />

              <h3 className="text-lg font-bold text-gray-900">{day.date}</h3>

            </div>

            

            <div className="space-y-3">

              {day.events.map((event, eventIndex) => (

                <ScheduleEvent key={eventIndex} event={event} />

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}



export default function FeedingAmerica() {

  return (

    <div className="max-w-7xl mx-auto px-4 py-8">

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">

          Feeding America Mobile Pantry Schedule

        </h1>

        <p className="text-gray-600">

          Free food distribution events throughout Muskegon and Ottawa Counties

        </p>

      </div>



      <CountySchedule 

        title="Muskegon County" 

        schedule={feedingAmericaSchedule.muskegon} 

      />

      

      <CountySchedule 

        title="Ottawa County" 

        schedule={feedingAmericaSchedule.ottawa} 

      />

    </div>

  );

}

