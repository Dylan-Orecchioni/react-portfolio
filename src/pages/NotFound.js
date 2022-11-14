import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='notFoundContent'>
                <h1>Erreur 404 !</h1>
                <h3>Désolé cette page n'existe pas !</h3>
                <NavLink exact="true" to="/">
                    <i className='fas fa-home'></i>
                    <span> Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;