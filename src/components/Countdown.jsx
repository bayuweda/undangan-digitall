// src/components/Countdown.jsx
import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center py-3 space-x-6 md:space-x-12 text-white">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-sm">Day</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-sm">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-sm">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-sm">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
