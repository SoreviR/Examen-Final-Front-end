"use client";

import React, { useEffect, useState } from "react";

const Digitalclock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(handleInterval);
  }, []);

  return (
    <div className="bg-black flex flex-col p-6 w-[400px] items-center gap-2">
      <h3 className="text-7xl font-semibold text-teal-400">Digital Clock</h3>
      <p className="text-7xl text-teal-400">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Digitalclock;
