import { useState } from "react"
import IngresarProducto from "./IngresarProducto";
import Agregarbtn  from "./Agregarbtn";
import IngresarCantidad from "./IngresarCantidad";

export default function AgregarProducto({agregarProducto}) 
{


    const[nombre, setNombre] = useState('');
    const[cantidad, setCantidad] = useState(1);
    
    const onAgregarProducto = () => {
        if (nombre.trim())
        {
            agregarProducto(nombre,cantidad);
            setNombre('');
            setCantidad(1);
        }
    }

    return(
        
        <div>
            <IngresarProducto nombre = {nombre} setNombre={setNombre} />
            <Agregarbtn onClick = {onAgregarProducto} disabled = {cantidad === 0} /> 
            <IngresarCantidad setCantidad = {setCantidad} cantidad = {cantidad} />
        </div>
    
       
    );


}

