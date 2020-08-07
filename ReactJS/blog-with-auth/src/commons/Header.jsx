import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext'
import { ThemeSwitcher } from '../components';

export const Header = () => {
    const { auth, username, logOut } = useContext(AuthContext);

    return (
        <header>
            <ThemeSwitcher />

            <NavLink exact to="/">Homepage</NavLink>
            {!auth && <NavLink to="/auth">Login</NavLink>}
            {auth && <NavLink to="/create">Create</NavLink>}
            {auth && <NavLink to="/profile">Profile</NavLink>}

            {auth && (
                <div className="user-info">
                    <i>{username}</i>
                    <button onClick={logOut}>log out</button>
                </div>
            )}

        </header>
    )
}