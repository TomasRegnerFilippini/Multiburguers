import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContextComponent";

const ItemCount = ({stock, initial, onAdd , product  }) =>{
    const [count , setCount] = useState(1);
    const {cart , addToCart } = useContext(cartContext);
    const [removeButton , setRemoveButton] = useState(false);

    const addClick = () => {
        if (onAdd < stock ) {
            setCount(count+1);
        }
    }
    const lessClick = () => {
        if ( onAdd > initial) {
            setCount(count-1)
        }
    }

    onAdd = count;

    const addCart = () => {
        addToCart(product,count);
        alert("se agreron al carrito"+" " + onAdd + " " + "unidades")
        setRemoveButton(true);
    }
    useEffect(() =>{
        console.log(cart)
    },[cart])

    return(
        <div>
           <button className="stockButtom" onClick={addClick}>+</button>{count} 
           <button className="stockButtom" onClick={lessClick}>-</button>{} 
           {removeButton? ( <>
            "producto agregado.."
            <Link to={"/"}>Seguir comprando</Link>
            </>
           ) : (
           <button className="stockButtom" onClick={addCart}>Add Cart</button>)}
          
        </div>
    )
}

export default ItemCount;