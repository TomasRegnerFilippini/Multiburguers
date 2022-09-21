import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
const NavBar = () =>{
  return(
    <div >
    <header className='topMenu'>
      <Link to='/'><h1>MultiBurguers</h1></Link>
      <nav>
        <ul className='menuList'>
          <li>
            <Link to='/category/Hamburguesa'><h1>Hamburguesas</h1></Link>
          </li>
          <li>
            <Link to='/category/veguie'><h1>Veguie</h1></Link>
          </li>
          <li>
            <Link to='/category/bebidas'><h1>Bebidas</h1></Link>
          </li>
        </ul>
      </nav>
        <a className="cartIcon"><ShoppingCartIcon/></a>
    </header> 
  </div>
  )
}

export default NavBar;