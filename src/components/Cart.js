import { useContext } from "react";
import { cartContext } from "./CartContextComponent";
import { Link } from "react-router-dom";

const Cart =() => {
    const {cart, totalCount , totalToPay, deleteFromCart} = useContext(cartContext);
    return(
        <>
          {cart.map((item) =>(
            
               <div className="cartList" key={item.id} >
                 <img className="cartImg" style= {{height:"100px"}} src ={item.img} alt ={item.name}></img>
                 <div className="cart">{item.name  +  " " + item.count}{" "}</div>
              

               <span className="trash" onClick={()=>deleteFromCart(item.id)}>🗑️</span></div>
            
          ))};
         <div className="check">
            Tienes en el carro : {totalCount} productos a pagar : {totalToPay}

         </div>

         <Link className="buyButtom" to ="/checkout">REALIZAR PEDIDO</Link>
    
        </>)
 }
 
 export default Cart ;