 import Product from "./pages/product/Product";
import Home from "./pages/Home";
import ProductList from "./pages/productlist/ProductList";
 import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
 import Cart from "./pages/cart/Cart";
 import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes 

} from "react-router-dom";
import { useSelector } from "react-redux";



function App() {
  const user=useSelector((state)=>state.user.currentUser);
  return (
  <Router>
    <Routes>
      <Route path="/"  element={<Home/>}>  
      </Route>
      <Route path="/products/:category" element={<ProductList/>}>  
      </Route>
      <Route path="/product/:id" element={<Product/>}>  
      </Route>
      <Route path="/cart" element={<Cart/>}>  
      </Route>
      <Route path="/products" element={<ProductList/>}>  
      </Route>
      {/* <Route path="/login" element={<Login/>}> 
      {/* {user?<Navigate to={"/"}/>:<Logisn/>} 
   
      </Route> */}
      <Route path="/login" element={user?<Navigate to={"/"}/>:<Login/>}> 
      </Route>
      <Route path="/register" element={user?<Navigate to={"/"}/>:<Register/>}>  
      </Route>
    </Routes>
  </Router>
  


 );
}

export default App;
