
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Category from './Pages/Category';

import Home from './Pages/Home';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';

function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/wines' element={<Category category ="wines"/>}/>
        <Route path ='/whiskey' element={<Category category ="whikey"/>}/>
        <Route path ='/vodka' element={<Category category ="vodka"/>}/>
        <Route path ="/product" element ={<Product/>}>
          <Route path =":productId" element ={<Product/>}/>
        </Route>
        <Route path ="/cart" element ={<Cart/>}/>
        <Route path  ="/Login" element ={<LoginSignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
