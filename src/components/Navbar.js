
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBar = () =>{
  return(
    <div >
    <header className='topMenu'>
      <Link to='/' className="subrayado mainTitle"><h1>MultiBurguers</h1></Link>
      <nav>
        <ul className='menuList'>
          <li>
            <Link to='/category/Hamburguesa' className="subrayado "><h1 className="subTitle">Hamburguesas</h1></Link>
          </li>
          <li>
            <Link to='/category/veguie' className="subrayado "><h1 className="subTitle">Veguie</h1></Link>
          </li>
          <li>
            <Link to='/category/bebidas' className="subrayado "><h1 className="subTitle">Bebidas</h1></Link>
          </li>
        </ul>
      </nav>
       <Link to='/cart' className="cartContainer"> <a className="cartIcon" ><CartWidget/></a > </Link>
    </header> 
  </div>
  )
}

export default NavBar;