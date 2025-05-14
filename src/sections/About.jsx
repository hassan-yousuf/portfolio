import React from 'react';

export default function About() {
  return (
    <section className="p-8" id="about">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Hi! I’m a passionate and detail-oriented Flutter developer with a strong focus on building scalable, responsive, and high-performance applications for mobile and web platforms. I specialize in Flutter and Dart, and I have hands-on experience integrating Firebase, REST APIs, third-party SDKs, and deploying production-grade apps.
        <br /><br />
        Over the years, I’ve built several real-time chat, video call, and productivity apps with features like authentication, push notifications, background services, and clean UI/UX. I follow best practices in state management, code architecture (MVC/MVVM), and write clean, maintainable code.
        <br /><br />
        My strength lies in transforming complex business requirements into intuitive interfaces, ensuring optimal user experience across all screen sizes and platforms. I also work with backend technologies like Node.js and Firebase Functions, giving me full-stack flexibility.
        <br /><br />
        When I’m not coding, I explore new frameworks, contribute to open-source projects, and stay up-to-date with the latest trends in mobile and web development.
      </p>

      <h3 className="text-xl font-bold mb-2">💼 Technologies & Tools I Work With</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800 dark:text-gray-200">
        <div>
          <h4 className="font-semibold">Languages</h4>
          <p>Dart, JavaScript, HTML, CSS</p>
        </div>
        <div>
          <h4 className="font-semibold">Frameworks</h4>
          <p>Flutter, Node.js</p>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
          <p>Firebase (Auth, Firestore, Messaging, Storage), Agora</p>
        </div>
        <div>
          <h4 className="font-semibold">Tools</h4>
          <p>Git, GitHub, Android Studio, Postman, Heroku, VS Code</p>
        </div>
        <div>
          <h4 className="font-semibold">Design</h4>
          <p>Figma, Adobe XD, responsive layout techniques</p>
        </div>
      </div>
    </section>
  );
}
