export default function IngresarCantidad({setCantidad, cantidad})

{
    return(
        <div className="container">
             <input type = "number"
            value={cantidad}
            onChange={(e)=> setCantidad(Number(e.target.value))}
            min="1" 
            />
        </div>
    ); 
}