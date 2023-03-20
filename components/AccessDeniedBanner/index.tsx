import React from 'react';

const AccessDeniedBanner = () => (
  <div className="flex flex-col justify-center items-center">
    <img src="./eye_denied.svg" />
    <span className="text-gray-400 text-lg font-body font-semibold">
      Non hai accesso a questi dati
    </span>
  </div>
);

export default AccessDeniedBanner;
