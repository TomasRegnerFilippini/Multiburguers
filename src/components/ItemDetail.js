import { Description } from "@mui/icons-material";
import Item from "./Item";
import ItemCount from "./itemCount";


const ItemDetail =({product}) => {

    return <div>
                <h1> {product.name} </h1>
                <img style= {{height:"400px"}} src={product.img} alt ={product.name}></img>
                <p>{product.description}</p>
                <h2> ${product.price} </h2>
                <p>stock: {product.stock} </p>
                <ItemCount 
                  product = {product}
                  stock={product.stock}
                  initial={1}
                  onAdd={0}/>
            </div>

}


export default ItemDetail ;