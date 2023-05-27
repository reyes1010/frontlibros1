import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AgregarLibro = () => {
    const [TituloLibro, setTituloLibro] = useState("");
    const [Autor, setAutor] = useState("");
    const [precio, setPrecio] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/libros", {
            TituloLibro,
            Autor,
            precio
        }).then(() => {
            navigate("/");
        }).catch(error => {
            console.error(error)
        }
        )
        setTituloLibro("");
        setAutor("");
        setPrecio("");
    }

    return (
        <div className="container">
            <h2>Agregar Libro</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label htmlFor="titulo">Titulo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="titulo"
                        placeholder="Titulo"
                        value={TituloLibro}
                        onChange={(e) => setTituloLibro(e.target.value)}

                    />
                </div>

                <div className="form-group">

                    <label htmlFor="autor">Autor</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Autor"
                        placeholder="Autor"
                        value={Autor}
                        onChange={(e) => setAutor(e.target.value)}

                    />
                </div>

                <div className="form-group">

                    <label htmlFor="precio">Precio</label>
                    <input
                        type="text"
                        className="form-control"
                        id="precio"
                        placeholder="Precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}

                    />
                </div>

                <button type="submit" className="btn mt-5 btn-primary">Agregar Libro</button>
            </form>
        </div>
    )
}


export default AgregarLibro;