  

export default function IngresarProducto({nombre, setNombre})

{
    return(
      <div className="container">
        <input type="text"  placeholder="Ingrese Producto"
        value={nombre}
        onChange={(e) => setNombre (e.target.value)}
        />
      </div>
        
        
    );
    
}