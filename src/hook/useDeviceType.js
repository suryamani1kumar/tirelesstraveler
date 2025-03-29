import { useState, useEffect } from 'react';

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('Desktop');

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth < 768) {
        setDeviceType('Mobile');
      } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
        setDeviceType('Tablet');
      } else {
        setDeviceType('Desktop');
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return deviceType;
};
