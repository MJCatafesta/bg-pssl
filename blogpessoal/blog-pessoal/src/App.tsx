import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cadastro from "./paginas/cadastro/Cadastro";
import Footer from "./paginas/components/footer/Footer";
import Navbar from "./paginas/components/navbar/Navbar";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>  
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;