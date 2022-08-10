import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import Institucional from "./pages/Institucional";
import CursosTalleres from "./pages/CursosTalleres"
import NavBarSocials from "../src/components/navBar/NavBarSocials"
import ArtesEscenicasPage from './pages/Artes-Escenicas.js'
import ArtesVisualesPage from './pages/Artes-Visuales.js'
import Musica from './pages/Musica.js'
import Cine from './pages/CinePage.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />
      
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/institucional" element ={<Institucional/>} />
          <Route path="/cursosytalleres" element ={<CursosTalleres/>} />
          <Route path="/artes-escenicas" element ={<ArtesEscenicasPage/>} />
          <Route path="/artes-visuales" element ={<ArtesVisualesPage/>} />
          <Route path="/musica" element ={<Musica/>} />
          <Route path="/cine" element ={<Cine/>} />

        </Routes>

        <NavBarSocials/>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
