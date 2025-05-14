// import React from 'react';
// import { ThemeProvider } from './components/ThemeContext';
// import Hero from './sections/Hero';
// import About from './sections/About';
// import Skills from './sections/Skills';
// import Projects from './sections/Projects';
// import Contact from './sections/Contact';
// import Navbar from './components/Navbar';

// export default function App() {
//   return (
//     <ThemeProvider>
//       <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
//         <Navbar />
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//       </div>
//     </ThemeProvider>
//   );
// }
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // optional if you're using Tailwind or global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
