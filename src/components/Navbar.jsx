import React from 'react';

export default function Navbar() {
  return (
    <nav className="p-4 shadow-md bg-white dark:bg-gray-800 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Muhammad Hassan Yousuf</h1>
        <div className="space-x-4">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
