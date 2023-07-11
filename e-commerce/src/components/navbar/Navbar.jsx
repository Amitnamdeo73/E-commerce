import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Input } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';

const Navbar = () => {

const quantity= useSelector(state=> state.cart.quantity)

  return (
    <div className='navbar-container'>
      <div className='wrapper'>
         <div className='left'>
            <div className='searchContainer'>
               <Input placeholder='Search'/>
               <SearchIcon style={{color:"gray",fontSize:"16px",cursor:"pointer"}} />
            </div>
         </div>
       <div className='centre'>
       <Link to={"/"}  className={"link-styles"}>
          <div className='logo'>Namdeo's fashion.</div>
          </Link>
       </div>
       <div className='right'>
       <Link to={"/register"} className={"link-styles"}>
             <div className='menuitem'>REGISTER</div>
             </Link>
             <Link to={"/login"} className={"link-styles"}>
             <div className='menuitem'>SIGN IN</div>
             </Link>
             <Link to={"/cart"} className={"link-styles"} >
             <div className='menuitem'>
                <Badge badgeContent={quantity} color="primary" className='badge'>
                <ShoppingCartOutlined  className='cart' />
                </Badge>
                </div >
                </Link>
       </div>
      </div>
      
    </div>
  )
}

export default Navbar
