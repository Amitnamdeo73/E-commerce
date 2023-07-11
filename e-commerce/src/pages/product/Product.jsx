import styled from "styled-components"
import Announcement from "../../components/announcement/Announcement"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Newsletter from "../../components/newsletter/Newsletter"
import "./product.scss"
import { Add, CurrencyRupee, Remove } from "@mui/icons-material"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import{publicRequest} from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux"
import {  useDispatch } from "react-redux";

const FilterColor=styled.div`
     width:20px;
     height: 20px;
     border-radius: 50%;
     background-color:${props=>props.color};
     margin: 0px 5px;
     cursor:pointer;


`
const Product = () => {
  const location=useLocation();
  const id=location.pathname.split("/")[2]
const [product,setProduct]=useState({});
const [quantity,setQuantity]=useState(1);
const [color,setColor]=useState("");
const [size,setSize]=useState("");
const dispatch = useDispatch();
useEffect(()=>{
  const getProduct= async ()=>{
    try{
      const res =await publicRequest.get("/products/find/"+id)
      setProduct(res.data)
    }
    catch(errors){

    }
  }
  getProduct();

},[id])


const handleQuantity=(type)=>{
   if(type === "dec"){
    quantity>1 && setQuantity(quantity-1);
   }
   else if(type === "inc"){
    setQuantity(quantity+1);
   }
}


const handleClick=()=>{
  dispatch(addProduct({...product, quantity, color, size}));
  
  
}

  return (
    
    <div className='ppcontainer'>
        <Navbar/>
        <Announcement/>
        <div className="Pwrapper">
            <div className="pimgcontainer">
            <img className="pimg" src={product.img} alt=""></img>
            </div>
        <div className="pInfoContainer">
            <h1 className="title">{product.title}</h1>
            <p className="desc">{product.desc}</p>
            <span className="price"><CurrencyRupee/>{product.price}</span>
            <div className="pFiltercontainer">
                <div className="filter">
                <span className="filtertitle">Color</span>
                {product.color?.map((c)=>(
                  <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                )) 

               };
                
               
                </div>
                
                <div className="filter-size">
                 <span className="filtertitle">Size</span>
                  <select className="select" onChange={(e)=>setSize(e.target.value)}>
                    {product.size?.map((s)=>(
                    <option key={s}>{s}</option>
                    ))}
                    
                    
                  </select>
                </div>
            </div>
              
              <div className="add-container">
                <div className="amount-container">
                  <Remove onClick={()=>handleQuantity("dec")}/>
                  <span className="amount">{quantity}</span>
                  <Add onClick={()=>handleQuantity("inc")}/>

                  <button className="addTOCart" onClick={handleClick}>Add To CART</button>
                </div>
              </div>


        </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Product
