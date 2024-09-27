import { useState, useEffect } from 'react';

export default function Carrito({ productos, eliminarProducto, editarProducto, setProducto }) {
  const [nombreNuevo, setNombreNuevo] = useState('');
  const [cantidadNuevo, setCantidadNuevo] = useState(1);
  const [productoEditando, setProductoEditando] = useState(null);

  const ordenarProductos = (productos) => {
    return productos.sort((a, b) => a.comprado - b.comprado);
  };


  useEffect(() => {
    setProducto((productos) => ordenarProductos([...productos]));
  }, [productos, setProducto]);

  const edicion = (producto) => {
    setProductoEditando(producto.nombre);
    setNombreNuevo(producto.nombre);
    setCantidadNuevo(producto.cantidad);
  };

  const guardarCambios = () => {
    editarProducto(productoEditando, nombreNuevo, cantidadNuevo);
    setProductoEditando(null);
  };

  const marcarComprado = (nombre) => {
    setProducto((productos) => {
      const productosActualizados = productos.map((producto) =>
        producto.nombre === nombre
          ? { ...producto, comprado: !producto.comprado }
          : producto
      );
      return ordenarProductos([...productosActualizados]);
    });
  };

  return (
    <div className="card shadow rounded cardA">
      <h2> CARRITO </h2>
      <div className="container ms-6 mb-3 mt-3">
        <ul>
          {productos.map((producto, index) => (
            <li key={index} className={producto.comprado ? 'comprado' : ''}>
              Producto: {producto.nombre} - Cantidad: {producto.cantidad}
              <div className="em">
                <button
                  className="btn  btn-sm btnpers l"
                  onClick={() => eliminarProducto(producto.nombre)}>
                  Eliminar
                </button>
                <button
                  className="btn  btn-sm btnpers l"
                  onClick={() => edicion(producto)} >
                  Modificar
                </button>
              </div>

              <input
                type="checkbox"
                checked={producto.comprado}
                onChange={() => marcarComprado(producto.nombre)}/>
              <label>{producto.comprado ? 'Comprado' : 'Pendiente'}</label>
              {productoEditando === producto.nombre && (
                <div>
                  <div className="row">
                    <div className="col">
                      <input
                        className="inp"
                        type="text"
                        value={nombreNuevo}
                        onChange={(e) => setNombreNuevo(e.target.value)}/>
                      <input
                        className="inp"
                        type="number"
                        value={cantidadNuevo}
                        onChange={(e) => setCantidadNuevo(e.target.value)}
                        min="1"/>
                      <button
                        className="btn btn-sm btnpers l"
                        onClick={() => guardarCambios(producto)}>
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}