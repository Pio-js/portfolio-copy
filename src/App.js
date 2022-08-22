import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useViewport from './components/useViewport';
import Navbar from './components/Navbar';
import Tech from './pages/Tech';
import About from './pages/About';
import Projects from './pages/Projects';
import language from './data/language.json';
import Contact from './pages/Contact';
import './App.css';

function App() {

  const [orientation, setOrientation] = useState()
  const [lang, setLang] = useState('de');
  const [data, setData] = useState(language['de']);

  const width = useViewport();
  const breakpoint = 800;

  useEffect(() => {
    width < breakpoint ? setOrientation('portrait') : setOrientation('landscape');
  }, [width, breakpoint]);

  useEffect(() => {
    console.log(lang);
    setData(language[lang]);
  }, [lang])

  return (
    <div className="App">
      {orientation === 'portrait' && <Navbar orientation={orientation} lang={lang} setLang={setLang} />}
      <main>
        {orientation === 'landscape' && <div id='sidebar'><Navbar orientation={orientation} lang={lang} setLang={setLang} /></div>}
        <div id='content'>
          <Routes>
            <Route index element = {<About orientation={orientation} lang={lang} data={data}/>} />
            <Route path="tech" element = {<Tech lang={lang} data={data}/>} />
            <Route path="projects" element = {<Projects lang={lang} data={data}/>} />
            <Route path="contact" element = {<Contact lang={lang} data={data}/>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
