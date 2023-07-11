import styled from "styled-components"
import Announcement from "../../components/announcement/Announcement"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./cart.scss"
import { Add, CurrencyRupeeOutlined, Remove } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) =>props.type === "filled" && "none"};
background-color: ${(props) =>props.type === "filled" ? "black" : "transparent"};
color: ${(props) =>props.type === "filled" && "white"};
`
const Color = styled.button`
width: 20px;
height: 20px;
border-radius: 50%; 
background-color: ${props=>props.color}
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"}
font-size: ${props=>props.type === "total" && "24px"}
`
//const Color = styled.button
const Cart = () => {
const cart =useSelector(state=>state.cart)


  return (
    <div className="Cart-container">
        <Navbar/>
        <Announcement/>
        <div className="C-wrapper">
          <h1 className="title" >YOUR BAG</h1> 

           <div className="top">
           <Link to={"/products"} className={"link-styles"}>
              <TopButton>CONTINUE SHOPPING</TopButton>
              </Link> 
                <div className="toptexts">
                    <span className="topText">shopping Bag(2)</span>
                    <span className="topText">Your Wishlist(0)</span>
                </div>

              <TopButton type="filled">CHECKOUT NOW</TopButton>
           </div>



           <div className="bottom">

            <div className="c-Info">
              
              {cart.products.map((product)=>(
              <div className="C-product">
                <div className="product-detail">
                  <img className="immg" src={product.img} alt=""></img>
                  <div className="deatils">
                    <span className="productname"><b>Product :</b> {product.title}</span>
                    <span className="productID"><b>ID:</b>{product._id}</span>
                    <Color className="productcolor" color={product.color}></Color>
                    <span className="productsize"><b>Size:</b>{product.size}</span>

                  </div>

                </div>
                <div className="price-detail">
                  <div className="Product-Amount-container">
                    <Add/>

                    <span className="ProductAmount">{product.quantity}</span>
                    <Remove/>
                  </div>
                  <span className="ProductPrice"><CurrencyRupeeOutlined/>{product.price*product.quantity}</span>
                </div>
              </div>
              ))};
              <hr/>
            
            </div>
            <div className="summary">
              <h1 className="stitle">ORDER SUMMARY</h1>
              <SummaryItem className="sitem">
                <span className="sItemText">Subtotal</span>
                <span className="sItemPrice"><CurrencyRupeeOutlined className="rupee"/>{cart.total}</span>

              </SummaryItem>
              <SummaryItem className="sitem">
                <span className="sItemText">Delivery Charges</span>
                <span className="sItemPrice"><CurrencyRupeeOutlined className="rupee"/>30</span>

              </SummaryItem>
              <SummaryItem className="sitem">
                <span className="sItemText">Discount</span>
                <span className="sItemPrice">- <CurrencyRupeeOutlined className="rupee"/>30</span>

              </SummaryItem>
              <SummaryItem className="sitem" type="total">
                <span className="sItemText" >Total Amount</span>
                <span className="sItemPrice"><CurrencyRupeeOutlined className="rupee"/>{cart.total}</span>

              </SummaryItem>
              <button className="button">BUY NOW</button>
            </div>

           </div>



        </div>
        <Footer/>
      
    </div>
  )
}

export default Cart
