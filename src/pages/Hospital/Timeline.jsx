import React from 'react';

const Timeline = () => {
  const events = [
    {
      year: '1988',
      title: 'Company founded',
      description: 'Nsobani Memorial Community Hospital was founded.',
    },
    {
      year: '2000',
      title: 'First major milestone',
      description: 'Reached 50,000 patients treated.',
    },
    {
      year: '2010',
      title: 'Expansion',
      description: 'Expanded to new facilities and increased capacity.',
    },
    {
      year: '2020',
      title: '200k Users',
      description: 'Our user base grew to over 200,000.',
    },
    {
      year: '2023',
      title: '500k Monthly Views',
      description: 'Our website received 500k monthly views.',
    },
    {
      year: '2024',
      title: '200+ Team Members',
      description: 'Our team expanded to over 200 members.',
    },
  ];

  return (
    <div className="relative border-l-2 border-gray-200 pl-4">
      {events.map((event, index) => (
        <div key={index} className="mb-8 ml-4">
          <div className="absolute -left-1.5 mt-1.5 w-3 h-3 bg-blue-600 rounded-full"></div>
          <div>
            <span className="text-sm text-gray-600">{event.year}</span>
            <h4 className="text-lg font-semibold text-gray-800">{event.title}</h4>
            <p className="text-gray-600">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
