import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="p-4">
      <div className="text-2xl mb-4">
        {Math.floor(seconds / 3600)}:
        {Math.floor((seconds % 3600) / 60)}:
        {seconds % 60}
      </div>
      <div>
        <button onClick={handleStart} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Start</button>
        <button onClick={handleStop} className="px-4 py-2 bg-red-500 text-white rounded mr-2">Stop</button>
        <button onClick={handleReset} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
