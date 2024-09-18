import logo from './logo.svg';
import './App.css';
import AgregarProducto from './components/AgregarProducto.jsx';
import Carrito from './components/Carrito.jsx';
import { useState } from 'react';


function App() {

  const [productos, setProducto]= useState([]);

  const agregarProducto = (nombre, cantidad) => 
  {
    setProducto([...productos,{nombre, cantidad}])
  }
  return (
    <div className="App">
      <AgregarProducto agregarProducto={agregarProducto}/>
      <Carrito productos={productos}/>
    </div>
  );
}

export default App;
