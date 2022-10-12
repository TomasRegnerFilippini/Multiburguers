import { Description } from "@mui/icons-material";
import Item from "./Item";
import ItemCount from "./itemCount";


const ItemDetail =({product}) => {

    return <div className="itemDetail">
                <h1 className="detailTitle"> {product.name} </h1>
                <img className="detailImg" style= {{height:"400px"}} src={product.img} alt ={product.name}></img>
                <p className="detailDescription">{product.description}</p>
                <h2 className="detailPrice"> ${product.price} </h2>
                <p className="detailStock">stock: {product.stock} </p>
                <ItemCount 
                  product = {product}
                  stock={product.stock}
                  initial={1}
                  onAdd={0}/>
            </div>

}


export default ItemDetail ;