/* eslint-disable object-curly-newline */
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, CategoryScale, Legend } from 'chart.js';
import clsx from 'clsx';

ChartJS.register(ArcElement, CategoryScale, Legend);

interface Props {
  title: string;
  darkPatternsStatisctycs?:
    | {
        name: string;
        darkPatternCount: number;
        backgroundColor: string;
      }[]
    | undefined;
  reverse?: boolean;
  noDataMessage: string;
}

const DarkPatternStatistics: React.FC<Props> = ({
  title,
  darkPatternsStatisctycs,
  noDataMessage,
  reverse,
}: Props) => {
  if (darkPatternsStatisctycs) {
    const data = {
      labels: darkPatternsStatisctycs.map((statistycs) => statistycs.name),
      datasets: [
        {
          label: '# di volte trovato',
          data: darkPatternsStatisctycs.map(
            (statistycs) => statistycs.darkPatternCount,
          ),
          backgroundColor: darkPatternsStatisctycs.map(
            (statistycs) => statistycs.backgroundColor,
          ),
          borderWidth: 0,
        },
      ],
    };

    return (
      <div className={clsx('border-2 border-gray-300 rounded-lg w-full mb-4')}>
        <span className="text-2xl font-semibold m-4">{title}</span>
        <div
          className={clsx(
            'flex justify-center lg:justify-between items-center lg:items-stretch',
            {
              'flex-col lg:flex-row-reverse': reverse,
              'flex-col lg:flex-row': !reverse,
            },
          )}
        >
          <div className="w-full lg:w-2/6">
            <Doughnut
              data={data}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
              className="m-4"
            />
          </div>
          <div className="w-full lg:w-4/6 flex flex-col flex-wrap justify-center items-center">
            {darkPatternsStatisctycs.map((statistycs) => (
              <div className="w-3/4 lg:w-1/2 flex justify-start items-start m-2">
                <div
                  className="w-5 h-5 rounded-md mr-2"
                  style={{
                    backgroundColor: statistycs.backgroundColor,
                  }}
                />
                <span className="font-semibold">{statistycs.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-lg w-full py-12 mb-4">
      <img src="/eye_denied.svg" className="mb-2" />
      <span className="font-bold text-3xl m-auto text-center text-gray-400">
        {noDataMessage}
      </span>
    </div>
  );
};

DarkPatternStatistics.defaultProps = {
  darkPatternsStatisctycs: undefined,
  reverse: false,
};
export default DarkPatternStatistics;
