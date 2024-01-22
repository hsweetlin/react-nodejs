import React from 'react';
import './demo.scss';
import barbie from '../pngwing.com.png';

export function Demo() {
    return(
        <>
        <img src={barbie} width='100px' height='100px'/>
        <h1 id='name'>Welcome Sweetlin</h1>
        </>
    )
}
