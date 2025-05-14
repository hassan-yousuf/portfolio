import React from 'react';

const projects = [
  { title: 'Chat App', description: 'Real-time chat with Firebase & Agora', link: '#' },
  { title: 'Portfolio', description: 'This portfolio site built with React', link: '#' },
];

export default function Projects() {
  return (
    <section className="p-8" id="projects">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(project => (
          <div key={project.title} className="p-4 border dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            <a href={project.link} className="text-blue-500">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
