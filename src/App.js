
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Category from './Pages/Category';

import Home from './Pages/Home';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';

import vodka_banner from './Components/Assets/Slider_img02.jpg'
import whiskey_banner from './Components/Assets/Slider_Img04.jpg'
import wine_banner from './Components/Assets/Slider_img03.jpg'

function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/wines' element={<Category banner={wine_banner} category ="wine"/>}/>
        <Route path ='/whiskey' element={<Category banner={whiskey_banner} category ="whikey"/>}/>
        <Route path ='/vodka' element={<Category banner={vodka_banner} category ="vodka"/>}/>
        <Route path ="/product" element ={<Product/>}>
          <Route path =":productId" element ={<Product/>}/>
        </Route>
        <Route path ="/cart" element ={<Cart/>}/>
        <Route path  ="/Login" element ={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
