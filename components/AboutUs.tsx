import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="mt-7 text-3xl font-extrabold tracking-tight text-center sm:text-4xl">About Track It To Habit</h2>
                <p className="mt-4 text-lg text-center text-gray-300">
                    HabitTracker is your personal habit tracking companion, designed to help you build positive habits and achieve your goals.
                </p>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg bg-gray-800 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Track Your Habits</h3>
                                <p className="mt-2 text-gray-300">
                                    Easily track your daily habits and monitor your progress over time.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg bg-gray-800 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Set Goals</h3>
                                <p className="mt-2 text-gray-300">
                                    Set achievable goals and receive reminders to stay on track.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg bg-gray-800 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Stay Motivated</h3>
                                <p className="mt-2 text-gray-300">
                                    Stay motivated with daily streaks and celebrate your progress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <a href="/sign-up" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;