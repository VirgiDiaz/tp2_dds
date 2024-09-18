import { useState } from "react"
export default function Carrito({productos})
{
    return(
       <div>
           <ul>
            {productos.map((producto,index) => (
                <li key={index}>
                   Producto: {producto.nombre} - Cantidad: {producto.cantidad}
                    
                </li>
            ))}
           </ul>
       </div> 
    );
}