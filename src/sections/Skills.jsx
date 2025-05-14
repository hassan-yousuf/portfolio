import React from 'react';

const skills = [
  { name: 'Dart & Flutter', level: 90 },
  { name: 'Firebase', level: 85 },
  { name: 'GitHub', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'UI/UX', level: 80 },
];

export default function Skills() {
  return (
    <section className="p-8" id="skills">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 space-y-2 transition transform hover:scale-[1.02]"
          >
            <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-200">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-700">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
