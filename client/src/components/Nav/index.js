import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand justify-content-center" href="/">
                Book Worm
            </a>
            <ul className="nav justify-content-end nav-pills">
                <li className="nav-item">
                    <a
                        className="nav-link text-primary"
                        href="https://github.com/Bioinformatics-Surgeon/book-worm-SQL/blob/master/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        About
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
