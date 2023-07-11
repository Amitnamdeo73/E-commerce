import React from 'react'
import { Navigate } from 'react-router-dom'

const Protectedlogin = ({admin,children}) => {
 if(!admin){
    return <Navigate to={"/login"}/>;
 }
 
    return children;
   
      
    
  
}

export default Protectedlogin
