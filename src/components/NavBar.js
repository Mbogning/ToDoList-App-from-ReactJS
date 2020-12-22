import React from 'react';
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const NavBar = () => (
    <footer>
        <NavLink to="/:filter?" className=""><FaListAlt/></NavLink>
        <NavLink to="/add-task" className=""><FaCheckSquare/></NavLink>
        <button className=""><FaPlusSquare/></button>
        <button className=""><FaTrash/></button>
    </footer>

)

export default NavBar
