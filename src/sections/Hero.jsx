import React from 'react';
import profileImage from '../assets/profile.jpg'; // Replace with your actual path

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center px-4 pt-24 sm:pt-32"
      id="hero"
    >
      <div>
        <div className="flex justify-center mb-6">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-fill border-4 border-blue-500 shadow-lg"
          />
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I'm Muhammad Hassan Yousuf
        </h2>
        <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300">
          Flutter Developer | Full Stack Engineer
        </p>
      </div>
    </section>
  );
}
