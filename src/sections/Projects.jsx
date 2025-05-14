import React from 'react';

const projects = [
  { title: 'Chat App', description: 'Real-time chat with Firebase & Agora'},
  { title: 'E-commerce App', description: 'Can shopping etc; with App & Web servers in a tap'},
  { title: 'Uber-Clone', description: 'Real-time rides and google map integration'},
  { title: 'Zoom-Clone', description: 'Create/join meetings with single tap'},
  { title: 'Ai-App', description: 'Gemini Integration with Firebase Functions'},
  { title: 'Car Rental Platform', description: 'Car Rental App & Web rent a car easily'},
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
            {/* <a href={project.link} className="text-blue-500">View Project</a> */}
          </div>
        ))}
      </div>
    </section>
  );
}
