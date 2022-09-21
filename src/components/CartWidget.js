import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { cartContext } from "./CartContextComponent";
const CartWidget  = () => {
    const { totalCount} = useContext(cartContext);
    return(
        <div>
            <Badge badgeContent={4} color ="secondary">
                 <ShoppingCart/>
            </Badge>
        </div>
    )
}

export default CartWidget;