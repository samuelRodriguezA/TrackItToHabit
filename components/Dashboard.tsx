"use client"
import React, { useState } from 'react';

const Dashboard = () => {
  const [buttonStates, setButtonStates] = useState<{ [key: string]: boolean }>({
    button1: false,
    button2: false,
    button3: false,
    // Add more buttons as needed
  });

  const [streakCounts, setStreakCounts] = useState<{ [key: string]: number }>({
    button1: 5,
    button2: 8,
    button3: 0,
    // Add more streak counts as needed
  });

  const [useClientCounter, setUseClientCounter] = useState(0);

  const handleButtonClick = (buttonId: string) => {
    setButtonStates(prevStates => ({
      ...prevStates,
      [buttonId]: !prevStates[buttonId],
    }));

    // Increment streak count and "use client" counter if the habit is completed
    if (!buttonStates[buttonId]) {
      setStreakCounts(prevCounts => ({
        ...prevCounts,
        [buttonId]: prevCounts[buttonId] + 1,
      }));
      setUseClientCounter(prevCounter => prevCounter + 1);
    }
  };

  return (
    <>
      <nav className="flex justify-between mb-5 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-white">Habit Streak Tracking</h1>
      </nav>
      <div className="flex flex-wrap p-24">
        <div className="p-4 m-4 w-full md:w-2/5 h-60 bg-dark-1 border-2 border-white rounded-lg">
          <label className="text-white p-4 text-2xl">Gym</label>
          <p className="text-white m-4">Current streak: <b>{streakCounts.button1} days</b></p>
          <button
            onClick={() => handleButtonClick('button1')}
            className={`m-4 px-4 py-2 rounded ${buttonStates.button1 ? 'bg-green-200' : 'bg-blue-500'}`}
          >
            {buttonStates.button1 ? 'Completed' : 'Complete'}
          </button>
        </div>
        <div className="p-4 m-4  w-full md:w-2/5 h-60 bg-dark-1 border-2 border-white rounded-lg">
          <label className="text-white p-4 text-2xl">Running</label>
          <p className="text-white m-4">Current streak: <b>{streakCounts.button2} days</b></p>
          <button
            onClick={() => handleButtonClick('button2')}
            className={`m-4 px-4 py-2 rounded ${buttonStates.button2 ? 'bg-green-200' : 'bg-blue-500'}`}
          >
            {buttonStates.button2 ? 'Completed' : 'Complete'}
          </button>
        </div>
        <div className="p-4 m-4  w-full md:w-2/5 h-60 bg-dark-1 border-2 border-white rounded-lg">
          <label className="text-white p-4 text-2xl">Reading</label>
          <p className="text-white m-4">Current streak: <b>{streakCounts.button3} days</b></p>
          <button
            onClick={() => handleButtonClick('button3')}
            className={`m-4 px-4 py-2 rounded ${buttonStates.button3 ? 'bg-green-200' : 'bg-blue-500'}`}
          >
            {buttonStates.button3 ? 'Completed' : 'Complete'}
          </button>
        </div>

      </div>
      <div className="flex justify-center flex-wrap px-24 ">
        <a href="/addhabit" className="m-4 bg-blue-500 text-white px-12 py-2 rounded">
          Add Habit
        </a>
        <a href="/calendar" className="m-4 bg-blue-500 text-white px-12 py-2 rounded">
          Calendar View
        </a>
      </div>


    </>
  );
};

export default Dashboard;
