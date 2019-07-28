import React from 'react';

/*
NOTES:
Its a presentation/dumnb component.
It does not modify the state.
So it is execute as stateless function component
*/

const navBar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand mb-0 h1" href="#">BigBasket
                <span className="badge badge-pill badge-primary m-2">
                    {
                    props.total
                }</span>
            </a>
        </nav>
    );
}

export default navBar;
