
import './App.css';
import './ListadoLibros'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaLibros from './ListadoLibros';
import AgregarLibro from './AgregarLibro';
import EditarLibro from './EditarLibro';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="">
      <header className="">
        <Nav />
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaLibros />} />
          <Route path="/agregar" element={<AgregarLibro />} />
          <Route path="/editar/:id" element={<EditarLibro />} />
        </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
