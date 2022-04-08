import 'the-new-css-reset/css/reset.css';
import 'bulma/css/bulma.css';
import './App.css';
import Hero from './components/Hero/';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutme');
  const updatePage = page => {
    setCurrentPage(page)
  }

  return (
    <>
      <Hero currentPage={currentPage} updatePage={updatePage} />
      {currentPage === 'projects' && (<Projects />)}
      {currentPage === 'aboutme' && (<AboutMe />)}
      {currentPage === 'contactme' &&(<ContactMe />)}
      {currentPage === 'resume' &&(<Resume />)}
      <Footer />
    </>
  );
}

export default App;
