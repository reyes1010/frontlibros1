import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const EditarLibro = () => {
    const { id } = useParams();
    const [TituloLibro, setTituloLibro] = useState("");
    const [Autor, setAutor] = useState("");
    const [precio, setPrecio] = useState("");
    const navigate = useNavigate();

    const obtenerLibro = useCallback(() => {
        axios.get(`http://productos.nelsonreyesfreelancer.com/api/libros/${id}`)
            .then(response => {
                const libro = response.data;
                setTituloLibro(libro.TituloLibro);
                setAutor(libro.Autor);
                setPrecio(libro.precio);

            }).catch(error => {
                console.error(error)
            })
    }, [id])

    useEffect(() => {
        obtenerLibro();
    }, [obtenerLibro])


    const editarLibro = (event) => {
        event.preventDefault();

        const libroEditado = {
            TituloLibro: TituloLibro,
            Autor: Autor,
            precio: precio
        }

        axios.put(`http://productos.nelsonreyesfreelancer.com/api/libros/${id}`, libroEditado)
        .then(() => {
            navigate("/");
        }).catch(error => {
            console.error(error)
        })
    }


    return (
        <div className="container">
            <h2>Editar Libro</h2>

            <form onSubmit={editarLibro}>

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

                <button type="submit" className="btn mt-5 btn-primary">Editar Libro</button>
            </form>
        </div>
    )

}

export default EditarLibro