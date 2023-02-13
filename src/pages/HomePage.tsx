import React, { useRef, useEffect } from 'react';
import ComboChart from '../components/ComboChart';
import { useAppSelector } from '../hooks/redux-hooks';



type Props = {}

function abbrNum(number: number, decPlaces: number): string {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  // Enumerate number abbreviations
  var abbrev = ["k", "m", "b", "t"];
  var result = ''
  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {

    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round(number * decPlaces / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if ((number == 1000) && (i < abbrev.length - 1)) {
        number = 1;
        i++;
      }

      // Add the letter for the abbreviation
      var result = number + abbrev[i];

      // We are done... stop
      break;
    }
  }

  return result;
}

const options = {
  scales: {
    y: {
      beginAtZero: false,
      ticks: {
        autoSkip: true,
        maxTicksLimit: 4,
        callback: function (value: any, index: any, ticks: any) {

          return abbrNum(value, 1);
        }
      },
      grid: {
        display: false,
        drawBorder: true,
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: true,
      },
    }
  },
  plugins: {
    legend: {
      display: false,
    }
  }
}



const HomePage = (props: Props) => {
  const state = useAppSelector(store => store.states.data)


  return (
    <div className='w-full bg-gray-50'>
      <div className='max-w-xl mx-auto'>
        <div className='grid grid-cols-2 xl:grid-cols-1 gap-8 py-20'>
          {state.map((el, index) => (
            <div className="bg-white w-full">
              <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{el.kpi}</h3>
                  <p className="mt-1 text-sm text-gray-500">{el.kpi} our company in 2022</p>
                </div>
                <div className="border-t border-gray-200 p-8">
                  <ComboChart kpi={el.kpi} options={options} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default HomePage