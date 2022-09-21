import { createContext, useState } from 'react';

export const cartContext = createContext();
const CartContextComponent =({children}) => {
    const [cart,setCart] = useState ([]);
    
   function addToCart(item, count){
      

   }

    return(
    <cartContext.Provider value={{cart, addToCart}}>
        {children}
    </cartContext.Provider>)
 }
 
 export default CartContextComponent ;