import { useState } from "react"

export default function IngresarCantidad({setCantidad, cantidad})
{
    return(
        
            <input type = "number"
            value={cantidad}
            onChange={(e)=> setCantidad(Number(e.target.value))}
            min="1" 
            />
       
        
    );
    
}