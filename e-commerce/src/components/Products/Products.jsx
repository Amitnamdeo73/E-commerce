import { popularProduct } from "../data"
import "./Products.scss"
import Product from "../product/Product"
import { useEffect, useState } from "react"
import axios from "axios"


const Products = ({cat,filters,sort}) => {
const [products,setProducts]=useState([]);
const [filteredProducts,setFilteredProducts]=useState([]);

useEffect(()=>{
const getProducts=async()=>{
  try{
  const res= await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`:"http://localhost:5000/api/products" ); 
   setProducts(res.data); 
 
  
}
  catch(err){
  }
};
getProducts()
},[cat])
useEffect(()=>{
  cat && setFilteredProducts(
    products.filter(item=>Object.entries(filters).every(([key,value])=>
    item[key].includes(value)))
  )
   
},[products,cat,filters])

useEffect(()=>{
  if((sort==="asc")){
    setFilteredProducts((prev)=>{
     [...prev].sort((a,b)=> a.price - b.price)
    })
    
  }
  else if((sort==="desc")){
    setFilteredProducts((prev)=>{
      [...prev].sort((a,b)=> b.price - a.price)
     })  
  }
});


  return (
    <div className="container-products">
      {cat 
      ? filteredProducts.map((item)=><Product item={item} key={item.id}/>)
      : products.slice(0,8).map((item)=>
        <Product item={item} key={item.id}/>)
      
      }
    </div>
  )
}

export default Products
