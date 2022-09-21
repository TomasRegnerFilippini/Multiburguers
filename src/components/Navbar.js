
import CartWidget from "./CartWidget";
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
       <Link to='/cart'> <a className="cartIcon"><CartWidget/></a> </Link>
    </header> 
  </div>
  )
}

export default NavBar;