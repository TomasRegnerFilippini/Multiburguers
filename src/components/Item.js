import { Link } from "react-router-dom";

const Item =({product}) => {
    return( 
        <div>
           <Link to={"/item/" + product.id}>
             <div>
                <p>id: {product.id} </p>
                <p>name: {product.name} </p>
                <p>price: {product.price} </p>
                <p>stock: {product.stock} </p>
              <img style= {{height:"250px"}} src={product.img} alt ={product.name}></img>
               </div>
           </Link>
         </div>
    )
  }
  
  export default Item;