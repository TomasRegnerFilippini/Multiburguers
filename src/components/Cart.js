import { useContext } from "react";
import { cartContext } from "./CartContextComponent";

const Cart =() => {
    const {cart, totalCount , totalToPay, deleteFromCart} = useContext(cartContext);
    return(
        <>
          {cart.map((item) =>(
            
               <div key={item.id}>
                 <img style= {{height:"100px"}} src ={item.img} alt ={item.name}></img>
                {item.name  +  " " + item.count}{" "}
              

               <span onClick={()=>deleteFromCart(item.id)}>🗑️</span></div>
            
          ))};
         <div>
            Tienes en el carro : {totalCount} productos a pagar : {totalToPay}

         </div>

         <button>REALIZAR PEDIDO</button>
    
        </>)
 }
 
 export default Cart ;