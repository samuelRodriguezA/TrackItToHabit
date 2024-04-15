"use client"
import React, { useState, useEffect } from 'react';

interface Event {
  title: string;
  streak: number;
  completed: boolean;
}

const Dashboard = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const [buttonStates, setButtonStates] = useState<{ [key: string]: boolean }>({
    button1: false,
    button2: false,
    button3: false,
  });

  const [streakCounts, setStreakCounts] = useState<{ [key: string]: number }>({
    button1: 0,
    button2: 0,
    button3: 0,
    button4: 0,
    button5: 0,
    button6: 0,
    button7: 0,
  });

  const [useClientCounter, setUseClientCounter] = useState(0);

  const handleButtonClick = (buttonId: string) => {
    setButtonStates(prevStates => {
      const newButtonStates = {
        ...prevStates,
        [buttonId]: !prevStates[buttonId],
      };
  
      // Increment streak count and "use client" counter if the habit is completed
      if (!prevStates[buttonId]) {
        setStreakCounts(prevCounts => ({
          ...prevCounts,
          [buttonId]: prevCounts[buttonId] + 1,
        }));
        setUseClientCounter(prevCounter => prevCounter + 1);
      }
  
      return newButtonStates;
    });
  };

  return (
    <>
      <nav className="flex justify-between mb-5 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-white">Habit Streak Tracking</h1>
      </nav>
      <div className="flex flex-wrap p-24">
        {events.map((event, index) => (
          <div key={index} className="p-4 m-4 w-full md:w-2/5 h-60 bg-dark-1 border-2 border-white rounded-lg">
            <label className="text-white p-4 text-2xl">{event.title}</label>
            <p className="text-white m-4">Current streak: <b>{streakCounts [`button${index + 1}`]} days</b></p>
            <button
              className={`m-4 px-4 py-2 rounded ${event.completed ? 'bg-green-200' : 'bg-blue-500'}`}
              onClick={() => handleButtonClick(`button${index + 1}`)}
            >
              {event.completed ? 'Completed' : 'Complete'}
            </button>
          </div>
        ))}
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
