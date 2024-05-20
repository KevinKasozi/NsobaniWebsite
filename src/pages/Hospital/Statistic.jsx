import React from 'react';

const Statistic = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-50">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-100">
            Health Statistics
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d5589eeb-3fca-4f01-ac3e-983224745704"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Healthcare</span>
          </span>{' '}
          in Uganda
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Uganda's healthcare system has made significant strides, but there are still challenges to overcome. Here are some key statistics that highlight the current state of healthcare in Uganda.
        </p>
      </div>
      <div className="relative w-full p-6 mx-auto mb-8 overflow-hidden transition-shadow duration-300 border rounded-lg shadow-sm lg:mb-12 lg:max-w-4xl bg-white group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-teal-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-teal-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-teal-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-teal-400 group-hover:scale-y-100" />
        <div className="relative flex flex-col items-center h-full duration-300 sm:items-stretch sm:flex-row sm:divide-x sm:divide-gray-300">
          <div className="flex-1 px-4 py-8 text-center">
            <h6 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              82%
            </h6>
            <p className="mt-2 text-gray-600 md:text-base">
              Access to basic healthcare services.
            </p>
          </div>
          <div className="flex-1 px-4 py-8 text-center">
            <h6 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              6.2%
            </h6>
            <p className="mt-2 text-gray-600 md:text-base">
              HIV prevalence among adults aged 15-49.
            </p>
          </div>
          <div className="flex-1 px-4 py-8 text-center">
            <h6 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              63 years
            </h6>
            <p className="mt-2 text-gray-600 md:text-base">
              Average life expectancy at birth.
            </p>
          </div>
          <div className="flex-1 px-4 py-8 text-center">
            <h6 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              375/100,000
            </h6>
            <p className="mt-2 text-gray-600 md:text-base">
              Maternal mortality rate.
            </p>
          </div>
        </div>
      </div>
      <p className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
        Uganda continues to work towards improving healthcare access and outcomes. The government and various organizations are actively involved in addressing these challenges.
      </p>
      <div className="flex justify-center">
        <a
          href="/hospital/about"
          className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition duration-300 text-lg"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Statistic;
