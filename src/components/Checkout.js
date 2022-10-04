import React, { useContext, useState} from "react";
import { cartContext } from "./CartContextComponent";
import {addDoc, collection , getFirestore} from "firebase/firestore";

const Checkout =() => {
    const {totalToPay , cart , deleteAllFromCart} = useContext(cartContext)
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [tel,setTel] = useState("");
    const [orderId , setOrderId] = useState("");
    
    function validateForm(){
      const order = {
        buyer : {name , tel ,email},
        totalToPay,
        cart,
      };
      const db = getFirestore();
      const orders = collection(db , "orders");
      addDoc(orders , order).then(({id}) =>{setOrderId(id);
       deleteAllFromCart();})
    }

return(
     <>
      {orderId ? (
        "Compra confirmada.El id de tu compra es :" + orderId
      ):(
     <div>
        <h1> Terminar compra , ingrese sus datos</h1>
        <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
        <input type="tel" placeholder="tel"  onChange={(e)=>setTel(e.target.value)}/>
        <input type="email" placeholder="email"  onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={validateForm}>TERMINAR DE COMPRAR</button>
      </div>)}
      </>
      )
}

export default Checkout;