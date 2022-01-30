import React from 'react';
import NavBar from './Components/Header/NavBar';
import ItemListContainer from './Components/Container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
            <NavBar/> 
            <ItemListContainer nombre ="CompumundoHiperMegaRed" />
            
            </>
);
}

export default App;
