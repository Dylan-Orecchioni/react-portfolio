import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src='./media/profil.png' alt='profil-pic'></img>
                    {/* <img src='./media/profil.png' alt='profil-pic'></img> */}
                    <h3>Dylan Orecchioni</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>   
                        {/* On precise que lorsque une Navlink est sélectionné on active telle Class */}
                    <NavLink exact="true" to="/" className={(nav) => (nav.isActive ? "navActive" : "")}> 
                        <i className='fas fa-home'></i>
                        <span>Accueil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact="true" to="/competences" className={(nav) => (nav.isActive ? "navActive" : "")}>
                        <i className='fas fa-mountain'></i>
                        <span>Compétences</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact="true" to="/portfolio" className={(nav) => (nav.isActive ? "navActive" : "")}>
                        <i className='fas fa-images'></i>
                        <span>PortFolio</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact="true" to="/contact" className={(nav) => (nav.isActive ? "navActive" : "")}>
                        <i className='fas fa-address-book'></i>
                        <span>Contact</span>
                    </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/dylan-orecchioni-développeur-web' target="_blank" rel='noreferrer noopener'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/Dylan-Orecchioni' target="_blank" rel='noreferrer noopener'>
                            <i className='fab fa-github'></i>
                        </a>
                    </li>

                </ul>
                <div className='signature'>
                    <p>From Dylan - 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
