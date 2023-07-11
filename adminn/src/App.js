import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/login.jsx";
import { useSelector } from "react-redux";
import Protectedlogin from "./components/protected/protectedlogin"
function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    
  //  <Router>
      
  //     <Routes>
        
  //       <Route path="/login" element={<Login />}></Route>
          
        
  //      {admin && ( 
  //          <>
  //           <Topbar />
  //           <div className="container">
  //             <Sidebar />
  //             <Route exact path="/" element={<Home />}></Route>
                
              
  //             <Route path="/users" element={<UserList />}>
                
  //             </Route>
  //             <Route path="/user/:userId" element={<User />}>
                
  //             </Route>
  //             <Route path="/newUser" element={<NewUser />}>
                
  //             </Route>
  //             <Route path="/products" element={ <ProductList />}>
               
  //             </Route>
  //             <Route path="/product/:productId" element={<Product />}>
                
  //             </Route>
  //             <Route path="/newproduct" element={<NewProduct />}>  
  //             </Route>
              
  //           </div>
  //         </>
          
  //          )}
           
  //     </Routes>
      
  //   </Router>




  <Router>
      
  
    
    {/* <Route path="/login" element={<Login />}></Route> */}
      
    
   {/* {admin && (  */}
       
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
          <>
          <Route path="/login" element={<Login />}>
            
          </Route>
          <Route exact path="/" element={<Protectedlogin admin={admin}><Home /></Protectedlogin>}></Route>
            
          
          <Route path="/users" element={<Protectedlogin admin={admin}><UserList /></Protectedlogin>}>
            
          </Route>
          <Route path="/user/:userId" element={<Protectedlogin admin={admin}><User /></Protectedlogin>}>
            
          </Route>
          <Route path="/newUser" element={<Protectedlogin admin={admin}><NewUser /></Protectedlogin>}>
            
          </Route>
          <Route path="/products" element={<Protectedlogin admin={admin}><ProductList /></Protectedlogin> }>
           
          </Route>
          <Route path="/product/:productId" element={<Protectedlogin admin={admin}><Product /></Protectedlogin>}>
            
          </Route>
          <Route path="/newproduct" element={<Protectedlogin admin={admin}><NewProduct /></Protectedlogin>}>  
          </Route>
          </>
          </Routes>
        </div>
      
      
       {/* )} */}
       

  
</Router>
  );
}

export default App;