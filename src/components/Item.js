import { Link } from "react-router-dom";

const Item =({product}) => {
    return( 
        <div className="cardBackground">
           <Link to={"/item/" + product.id} className="subrayado">
             <div>
                
                <p className="titleName">{product.name} </p>
                <img style= {{height:"250px"}} src={product.img} alt ={product.name}></img>
                <p className="items">${product.price} </p>
                {/* <p className="items">stock: {product.stock} </p> */}
               </div>
           </Link>
         </div>
    )
  }
  
  export default Item;