import { useState } from "react"
import "./login.scss"
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
const Error =styled.span`
color:red;

`

const Login = () => {
  const [username,setUsername]=useState("");
  const [passward,setPassward]=useState("");
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector((state)=>state.user);

const handleClick=(e)=>{
e.preventDefault()
login(dispatch,{username,passward})
}

  return (
    <div className="Login-container">
       <div className="l-wrapper">
        <h1 className="title">SIGN IN</h1>
        <form className="L-Form">
           <input placeholder="Username" className="L-Input" type="text" onChange={(e)=>setUsername(e.target.value)}/>
           <input placeholder="Password" className="L-Input" type="password" onChange={(e)=>setPassward(e.target.value)}/> 
           <button type="submit" onClick={handleClick} disabled={isFetching}>LOGIN</button>
           {error && <Error>Somthing went wrong...</Error>}
           <a href="">FORGET PASSWORD</a>
           <a href="../register/Register.jsx">CREATE A NEW ACCOUNT</a>
        </form>
        </div>  
      
    </div>
  )
}

export default Login
