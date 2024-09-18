import { useState } from "react"    

export default function IngresarProducto({nombre, setNombre})
{
    return(
      
        <input type="text"  placeholder="Ingrese Producto"
        value={nombre}
        onChange={(e) => setNombre (e.target.value)}
        />
      
        
    );
    
}