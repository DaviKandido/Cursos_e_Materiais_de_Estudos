import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/app.scss";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import ReactIcons from "./pages/ReactIcons";


function App() {


  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route  path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/icons" element={<ReactIcons/>} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
