import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Navegador from "./Components/Nav";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Institucional from "./Pages/Institucional";
import Distribuidores from "./Pages/Distribuidores";
import Productos from "./Pages/Productos";
import PuertaDobleContacto from "./Pages/DobleContacto";

function App() {
  return (
    <>
      <Navegador />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Institucional" element={<Institucional />} />
        <Route path="/Distribuidores" element={<Distribuidores />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Productos/DobleContacto" element={<PuertaDobleContacto />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
