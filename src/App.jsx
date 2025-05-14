import React from 'react';

const skills = [
  { name: 'Dart & Flutter', percent: 90 },
  { name: 'Firebase', percent: 85 },
  { name: 'GitHub', percent: 80 },
  { name: 'Node.js', percent: 75 },
  { name: 'MongoDB', percent: 70 },
  { name: 'UI/UX Design', percent: 80 },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Muhammad Hassan Yousuf</h1>
        <p className="text-xl mb-6">Flutter Developer | Full Stack Engineer</p>
        <p className="mb-8">
          Hi! I'm a passionate Flutter developer with experience in building responsive apps and deploying full-stack projects. I love bringing UI/UX designs to life and optimizing for performance.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
              <h2 className="font-semibold text-lg mb-2">{skill.name}</h2>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1">{skill.percent}%</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/hassan-yousuf" className="hover:text-blue-500" target="_blank">GitHub</a>
          <a href="https://x.com/hassan_sak69540" className="hover:text-blue-500" target="_blank">Twitter</a>
          <a href="https://www.linkedin.com/in/hassan-sakaria-027601365" className="hover:text-blue-500" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default App;