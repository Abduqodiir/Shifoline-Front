import React from 'react'

const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Text */}
                <div className="max-w-3xl mb-16 space-y-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Professional tibbiy maslahat, <span className="text-blue-600">endi onlayn</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        24/7 malakali shifokorlardan maslahat oling. Vaqtingizni tejang, sog'ligingizni asrang
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="text-4xl font-bold text-blue-600 mb-3">500+</div>
                        <div className="text-gray-600 font-medium">Malakali shifokorlar</div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="text-4xl font-bold text-blue-600 mb-3">10,000+</div>
                        <div className="text-gray-600 font-medium">Muvaffaqiyatli maslahatlar</div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="text-4xl font-bold text-blue-600 mb-3">4.9/5</div>
                        <div className="text-gray-600 font-medium">Mijozlar reytingi</div>
                    </div>
                </div>

                {/* Search Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
                    <form className="flex flex-col sm:flex-row gap-6">
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Shifokor yoki kasallik turi"
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Mutaxassislik"
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                        >
                            QIDIRISH
                        </button>
                    </form>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -z-10 overflow-hidden">
                    <div className="w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="absolute bottom-0 left-0 -z-10 overflow-hidden">
                    <div className="w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero