import React from 'react';

const Nav = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

            <div className='container'>
                <a className='navbar-brand' href='/'>Inicio</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>

                    <span className='navbar-toggler-icon'></span>

                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='/agregar'>Agregar Libro</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;