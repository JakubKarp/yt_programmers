import React from 'react';
import { render } from 'react-dom';
import './scss/style.scss'

const App = () => {
    

    return <div className="a" >
        <h1 className="h" > To niesamowite!</h1>
        <p>Działa :</p> 
    </div>
}

render ( 
    <App /> ,
    document.getElementById('root')
)