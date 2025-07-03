import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SobreMi } from './assets/sobreMi/SobreMi';
import { Portafolio } from './assets/portafolio/Portafolio';
import { Home } from './assets/home/Home';
Home


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SobreMi" element={<SobreMi />} />
        <Route path="Portafolio" element={<Portafolio />} />

        <Route path="/*" element={<Home />} />


      </Routes>

      <Footer />

    </>
  )
}

export default App
