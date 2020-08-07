import React from 'react';

export const Layout = ({ children, goTo }) => {
    return (
        <div>
            <header>
                <nav>
                    <button onClick={() => goTo('homepage')} className="nav-link">Homepage</button>
                    <button onClick={() => goTo('create')} className="nav-link">Create</button>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}