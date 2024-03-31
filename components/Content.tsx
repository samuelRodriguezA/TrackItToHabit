import React from 'react';

const Content = () => {
    return (
        <div className="pt-[6rem]"> 
            <div className="container relative">
                <div className="max-w-[62rem] mx-auto text-center mb-[1.875rem] md:mb-10 lg:mb-[3.125rem]"> {/* Reduced margin */}
                    <h1 className="text-white text-4xl font-bold mb-2"> 
                        Build Better Habits with Track It To Habit
                    </h1>
                    <p className="text-white text-lg mb-4"> 
                    Track It To Habit  is a powerful habit tracking app designed to help you build and maintain positive habits. Track your progress, set goals, and stay motivated on your journey to a better you.
                    </p>

                </div>
                <div className="text-center container relative z-2 text-white">
                    <h2 className="text-center text-3xl font-bold mb-4 md:mb-8">
                        Key Features
                    </h2>
                    <ul className="max-w-[22rem] mx-auto mb-10 md:mb-14">
                        <li className="mb-3 py-3 bg-gray-800 rounded-lg">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 13.707a1 1 0 001.414 0L11 10.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 000 1.414z" clipRule="evenodd" />
                                </svg>
                                <h6 className="ml-3">Customizable Habit Tracking</h6>
                            </div>
                            <p className="mt-1 text-sm text-gray-300">Easily customize your habits and track your progress.</p>
                        </li>
                        <li className="mb-3 py-3 bg-gray-700 rounded-lg">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 13.707a1 1 0 001.414 0L11 10.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 000 1.414z" clipRule="evenodd" />
                                </svg>
                                <h6 className="ml-3">Goal Setting and Tracking</h6>
                            </div>
                            <p className="mt-1 text-sm text-gray-300">Set achievable goals and track your progress towards them.</p>
                        </li>
                        {/* Add more benefits here */}
                    </ul>

                    <a href="/sign-in" className="block bg-blue-500 text-white py-2 px-4 rounded-lg font-bold text-sm hover:bg-blue-600 transition duration-300 mb-2 md:mb-4">
                        Get started
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Content;
