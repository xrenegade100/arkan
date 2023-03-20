import React from 'react';

const LoadingBanner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin h-24 w-24 rounded-full border-4 border-transparent border-t-4 border-t-primary-main" />
    <div className="ml-4 flex flex-col justify-center items-start">
      <span className="text-4xl font-logo font-bold text-secondary-main">
        ARKAN
      </span>
      <span className="text-lg font-body font-semibold">
        Dark Pattern Risk Evaluation
      </span>
    </div>
  </div>
);

export default LoadingBanner;
