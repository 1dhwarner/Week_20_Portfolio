import './App.css';
import Nav from './compenents/Nav';
import Header from './compenents/header/Header';
import AboutMe from './compenents/AboutMe';
import ResumeDownload from './compenents/resume-download/ResumeDownload';
import Projects from './compenents/projects/Projects';
import ContactMe from './compenents/ContactMe';
import Footer from './compenents/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <AboutMe />
      <ResumeDownload />
      <Projects />
      <ContactMe />
      <Footer />

    </div>
  );
}

export default App;
