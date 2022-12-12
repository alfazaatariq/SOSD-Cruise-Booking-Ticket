import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';

export const Timer = ({ expiryTimestamp }) => {
  const [show, setShow] = useState(true);

  setTimeout(() => setShow(false), 7000);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  return (
    // <h3>
    //   {hours}:{minutes}:{seconds}
    // </h3>
    <div>
      {!show ? (
        <h3>
          {hours}:{minutes}:{seconds}
        </h3>
      ) : (
        <h3>...</h3>
      )}
    </div>
  );
};
