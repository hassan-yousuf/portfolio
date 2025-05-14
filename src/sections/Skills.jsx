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
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="space-y-4">
        {skills.map(skill => (
          <div key={skill.name}>
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-700">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
