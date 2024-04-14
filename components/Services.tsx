import React from 'react'

const Services = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="mt-8 text-3xl font-extrabold tracking-tight text-center sm:text-4xl">Our Services</h2>
                <p className="mt-4 text-lg text-center text-gray-500">Explore our range of services designed to help you achieve your goals.</p>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg bg-gray-800 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Personalized Habit Plans</h3>
                                <p className="mt-2 text-gray-300">Get customized habit plans tailored to your lifestyle and goals.</p>
                            </div>
                        </div>
                        <div className="rounded-lg bg-gray-800 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Progress Tracking</h3>
                                <p className="mt-2 text-gray-300">Track your progress over time and stay motivated.</p>
                            </div>
                        </div>
                        <div className="rounded-lg bg-gray-800 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Goal Setting</h3>
                                <p className="mt-2 text-gray-300">Set achievable goals and receive reminders to stay on track.</p>
                            </div>
                        </div>
                        <div className="rounded-lg bg-gray-800 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Community Support</h3>
                                <p className="mt-2 text-gray-300">Join our community for support, advice, and motivation.</p>
                            </div>
                        </div>
                        <div className="rounded-lg bg-gray-800 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Wellness Workshops</h3>
                                <p className="mt-2 text-gray-300">Attend workshops to learn more about wellness and habit formation.</p>
                            </div>
                        </div>
                        <div className="rounded-lg bg-gray-800 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Premium Coaching</h3>
                                <p className="mt-2 text-gray-300">Get one-on-one coaching from our expert team to accelerate your progress.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Services