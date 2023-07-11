import styled from "styled-components"
import"./slider.scss"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"
import {sliderItems} from "../data" 
import { Link } from 'react-router-dom';
const Arrow=styled.div`

    width: 50px;
    height: 50px;
    background-color: rgb(245, 235, 235);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content:center ;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor:pointer;
    opacity:0.5;
    z-index:2;

`
const Slide=styled.div`
background-color: #${(props) => props.bg};
`
const Wrapper=styled.div`
transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0)
    const handleClick =(direction)=>{
      
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 :2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 :0)
        }
    }

  return (
    <div className="Slider-container">
      
        <Arrow direction="left" onClick={() =>handleClick("left")}>
           <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper className="wrapper" slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
             
            
            <Slide className="slide" bg={item.bg} key={item.id}>
                <div className="ImgContainer">
                    <img alt="" src={item.img}></img>
                </div>
                <div className="InfoContainer">
                    <h1 className="title">{item.title}</h1>
                    <p className="desc">{item.desc} </p>
                    <Link to={"/products"}>
                    <button className="button">SHOP NOW</button>
                    </Link>
                </div>
            </Slide>
            )) }   
        </Wrapper>
        <Arrow direction="right" onClick={() =>handleClick("right")}>
           <ArrowRightOutlined/>
        </Arrow>
    </div>
  )
}

export default Slider
