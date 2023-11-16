import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Footer from "./paginas/components/footer/Footer";
import Navbar from "./paginas/components/navbar/Navbar";
import Cadastro from "./paginas/cadastro/Cadastro";
import ListaTemas from "./paginas/components/temas/listaTemas/ListaTemas";
import FormularioTema from "./paginas/components/temas/formularioTema/FormularioTema";


function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastroTema" element={<FormularioTema />} />
            <Route path="/editarTema/:id" element={<FormularioTema />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;