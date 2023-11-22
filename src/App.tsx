import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Footer from "./paginas/components/footer/Footer";
import Navbar from "./paginas/components/navbar/Navbar";
import Cadastro from "./paginas/cadastro/Cadastro";
import ListaTemas from "./paginas/components/temas/listaTemas/ListaTemas";
import FormularioTema from "./paginas/components/temas/formularioTema/FormularioTema";
import DeletarTema from "./paginas/components/temas/deletarTema/DeletarTema";
import ListaPostagens from "./paginas/components/postagens/listaPostagens/ListaPostagens";
import FormularioPostagem from "./paginas/components/postagens/formularioPostagem/FormularioPostagem";
import DeletarPostagem from "./paginas/components/postagens/deletarPostagem/DeletarPostagem";
import Perfil from "./paginas/perfil/Perfil";


import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <AuthProvider>
      <ToastContainer/>
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
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
            <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      
    </AuthProvider>
  );
}

export default App;