//import styled from "styled-components"
import "./product.scss"
 import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import "../data";
import { Link } from "react-router-dom";
// const Circle=styled.div`
//    width: 200px;
//    height:200px;
//    border-radius:50%;
//    background-color:white;
//    position:absolute;
// `
const Product = ({item}) => {
  return (
    <div className="container-product">
      
      <img src={item.img} alt="img" />
      <div className="info">
        <div className="icon">
          <ShoppingCartOutlined/>

        </div>
        <div className="icon">
          <Link to={`/product/${item._id}`}>
          <SearchOutlined/>
          </Link>
          
        </div>
        <div className="icon">
          <FavoriteBorderOutlined/>
          
        </div>
      </div>
    </div>
  )
}

export default Product


