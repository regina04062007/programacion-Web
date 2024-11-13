
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'
/*
const saludo = <h1> Hola mundo :D </h1>; 

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(saludo);
*/


const root =ReactDOM.createRoot(document.getElementsByName('root'));
root.render(<App/>);

