import './App.css';
import Nav from './compenents/Nav';
import Header from '.components/header/Header';
import AboutMe from './compenents/AboutMe';
import ResumeDownload from './compenents/resume-download/ResumeDownload';
import Projects from './components/projects/Projects';
import Footer from './compenents/Footer';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <AboutMe />
      <ResumeDownload />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;
