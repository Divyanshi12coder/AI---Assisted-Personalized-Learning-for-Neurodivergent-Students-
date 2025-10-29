// src/components/Pomodoro.jsx
import React, { useState, useEffect } from 'react';

function Pomodoro() {
  const [seconds, setSeconds] = useState(1500); // 25 mins
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && seconds > 0) {
      const timer = setTimeout(() => setSeconds(s => s - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [active, seconds]);

  return (
    <div>
      <h2>{Math.floor(seconds / 60)}:{seconds % 60}</h2>
      <button onClick={() => setActive(!active)}>{active ? 'Pause' : 'Start'}</button>
    </div>
  );
}

export default Pomodoro;