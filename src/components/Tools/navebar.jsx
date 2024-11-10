import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Bank App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/transfer">Transfer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/deposer">Deposer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/retirer">Retirer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/clients">Clients</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AddClient">AddClient</Link>
                        </li>

                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/comptes">Accounts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AddCompte">Add Accounts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Onecompte">Onecompte</Link>
                        </li>

                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/employes">Employees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AddEmploye">Add Employe</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/groupes">Groups</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Addgroupe">Add Group</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/emp2grp">EMPLOYER 2 GROUP</Link>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
