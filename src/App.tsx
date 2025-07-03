import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './dist/components/Header';
import { Footer } from './dist/components/Footer';
import { SobreMi } from './dist/assets/sobreMi/SobreMi';
import { Portafolio } from './dist/assets/portafolio/Portafolio';
import { Home } from './dist/assets/home/Home';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='Home' element={<Home />} />
        <Route path="SobreMi" element={<SobreMi />} />
        <Route path="Portafolio" element={<Portafolio />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
