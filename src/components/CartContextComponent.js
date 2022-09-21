import { createContext, useEffect, useState } from 'react';

export const cartContext = createContext();

const CartContextComponent =({children}) => {
    const [cart,setCart] = useState ([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalToPay, setTotalToPay] = useState(0);
    
   function addToCart(item , count){

    const cartAux =[...cart];
    let foundInCart = false;

    for (let i = 0; i < cart.length; i++) {
        if (cartAux[i].id == item.id) {
            cartAux[i].count = cartAux[i].count + count;
            foundInCart = true;
        }
        
    }
    if (!foundInCart) {
        cartAux.push({...item, count});
        
    }
    setCart(cartAux);

   }

   function deleteFromCart(id){
       setCart(cart.filter(item=>item.id !== id))
   }

   
   useEffect(()=>{
    setTotalCount(cart.reduce((acc,item)=>acc + item.count,0))
    setTotalToPay(cart.reduce((acc,item)=>acc + item.count * item.price,0))
   },[cart])


      

   

    return(
    <cartContext.Provider value={{cart, addToCart, totalCount,totalToPay,deleteFromCart}}>
        {children}
    </cartContext.Provider>)
 }
 
 export default CartContextComponent ;