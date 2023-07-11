import Navbar from '../../components/navbar/Navbar';
import Announcement from '../../components/announcement/Announcement';
import Products from'../../components/Products/Products';
import Newsletter from'../../components/newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import "./productlist.scss"
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const ProductList = () => {
  const location=useLocation();
  const cat=location.pathname.split("/")[2]
  const [filters,setFilters]=useState({})
  const [sort,setSort]=useState("Lower-Higher")


const handleFilter=(e)=>{
  const value=e.target.value;
  setFilters({
    ...filters,
    [e.target.name]:value,
  });
}



  return (
    <div className="ProductList-container">
     <Navbar />  
     <Announcement/> 
     <h1  className='title'>{cat}</h1>
     <div className='filterContainer'>
      <div className='filter'>
        <span className='filtertext'>Filter products:</span>
        <select className='select' name="color" onChange={handleFilter}>
          <option disabled >Color</option>
          <option>White</option>
          <option>Black</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Yellow</option>
        </select>
        <select className='select' name="size" onChange={handleFilter}>
          <option disabled >Size</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
      </div>
      <div className='filter'><span className='filtertext'>Sort products:</span>
      <select className='select' onChange={(e)=>setSort(e.target.value)}>
          <option disabled >Price</option>
          <option value="asc">Lower-Higher</option>
          {/* <option value="desc">Higher-Lower</option> */}
          
        </select>
      </div>
     </div>
     <Products cat={cat} filters={filters} sort={sort}/>
     <Newsletter/>
     <Footer/>
      
    </div>
  )
}

export default ProductList

