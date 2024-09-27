import {useState}

from "react"
import IngresarProducto from "./IngresarProducto";
import IngresarCantidad from "./IngresarCantidad";


export default function AgregarProducto( {
agregarProducto
}

) {
const [nombre,
setNombre]=useState('');
const [cantidad,
setCantidad]=useState(1);

const onAgregarProducto=()=> {
if (nombre.trim()) {
agregarProducto(nombre, cantidad);
setNombre('');
setCantidad(1);
}
}

return (< div className="card shadow  rounded cardA">
    <div className="container mb-3 mt-3">
        <h1> LISTA DE COMPRAS </h1> 
            <div className="row">
                <div className="col-2 b">
                    < IngresarProducto nombre={ nombre } setNombre={ setNombre } />
                </div> 
                < div className="col-2 b">
                    < IngresarCantidad setCantidad={ setCantidad } cantidad={ cantidad } />
                </div> 
                < div className="col">
                    < button class="btn  btn-sm btnpers l ms-2" onClick={ onAgregarProducto } disabled={
                    cantidad===0 }> AGREGAR </button> 
                </div>
            </div> 
    </div>
    </div>
    ); 
    }