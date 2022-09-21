import './App.css';
import {Routes , Route , BrowserRouter} from "react-router-dom";
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextComponent from './components/CartContextComponent';



const App= () =>{
 
  return (
    <>
      <CartContextComponent>
        <BrowserRouter>
         <NavBar/>
         <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
         </Routes>
        </BrowserRouter>
      </CartContextComponent>

    </>
      
  );
}

export default App;
