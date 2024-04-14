"use client"
import React, { useState } from 'react'


interface AddHabitProps {
  onCreate?: (event: { title: string; description: string; startDate: string; frequency: string; endDate?: string; id: string }) => void;
}

const AddHabit: React.FC<AddHabitProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const [endDate, setEndDate] = useState('');
  const [isEndDateEnabled, setIsEndDateEnabled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent = {
      title,
      description,
      startDate,
      frequency,
      endDate: isEndDateEnabled ? endDate : undefined,
      id: new Date().getTime().toString(),
    };
    onCreate(newEvent);
    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setIsEndDateEnabled(false);
  };

  return (
    <div>
      <nav className="flex justify-between mb-5 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-white">Create Habit</h1>
      </nav>
      <form onSubmit={handleSubmit} className="flex-col justify-center items-center mb-12 border-b border-violet-100 p-24">
        <label className="text-white">Habit Name</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="  Habit Name"
          className="block w-full my-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
        />
        <label className="text-white">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="  Description"
          className="block w-full my-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
        />
        <label className="text-white">Frequency</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="block w-full my-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
        >
          <option value="daily">Daily</option>
          <option value="everyOtherDay">Every Other Day</option>
          <option value="weekly">Weekly</option>
          <option value="biWeekly">Bi-Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <div className='flex'>
          <label className="text-white">Start Date</label>
          <div >
            <label className="text-white ml-24 mr-4">Set End Date</label>

            <input
              type="checkbox"
              checked={isEndDateEnabled}
              onChange={(e) => setIsEndDateEnabled(e.target.checked)}
              className="mr-2"
            />
          </div>
        </div>
        <div className='flex'>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder=" Start Date "
            className="flex  my-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
          />

          {isEndDateEnabled && (
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className=" flex  ml-14 my-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
            />
          )}

        </div>
        <button
          type="submit"
          className="mt-4 inline-flex w-full justify-center rounded-md bg-blue-1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
          disabled={!title || !startDate}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddHabit;