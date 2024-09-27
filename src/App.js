import './App.css'
import AgregarProducto from './components/AgregarProducto.jsx';
import Carrito from './components/Carrito.jsx';
import {
  useState
} from 'react';


function App() {

  const [productos, setProducto] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);

  const agregarProducto = (nombre, cantidad) => {
    const productoExistente = productos.find((producto) => producto.nombre === nombre);

    if (productoExistente) {
      setProducto(
        productos.map((producto) =>
          producto.nombre === nombre ? {
            ...producto,
            cantidad: producto.cantidad + cantidad
          } :
          producto
        )
      );
    } else {
      setProducto([...productos, {
        nombre,
        cantidad,
        comprado: false
      }]);
    }
  }
  const eliminarProducto = (nombre) => {
    setProducto(productos.filter((producto) => producto.nombre !== nombre))
  }

  const editarProducto = (nombreOriginal, nombreNuevo, cantidadNueva) => {
    setProducto(
      productos.map((producto) =>
        producto.nombre === nombreOriginal ? {
          ...producto,
          nombre: nombreNuevo,
          cantidad: cantidadNueva
        } :
        producto
      )
    );

    setProductoEditando(null);
  }


  return ( <
    div className = "App" >
    <
    AgregarProducto agregarProducto = {
      agregarProducto
    }
    /> <
    Carrito productos = {
      productos
    }
    eliminarProducto = {
      eliminarProducto
    }
    editarProducto = {
      editarProducto
    }
    setProducto = {
      setProducto
    }
    setProductoEditando = {
      setProductoEditando
    }
    /> </div >
  );
}

export default App;