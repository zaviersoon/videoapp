import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return ( 
        <div>
            <Link to='/gallery'>Gallery</Link>
            &nbsp;&nbsp;
            <Link to='/contentapi'>Content API</Link>
            &nbsp;&nbsp;
            <Link to='/youtube'>Youtube</Link>
        </div>
     );
}

export default Menu;