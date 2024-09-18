import { useState } from "react"

export default function Agregarbtn({onClick, disabled})
{
    
    return(
        <div>
            <button onClick= {onClick} disabled = {disabled} > AGREGAR </button>
        </div>
           

       
        
    );
    
}