import "./register.scss"


const Register = () => {
  return (
    <div className="Register-container">
       <div className="R-wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form className="R-Form">
           <input placeholder="First Name" className="R-Input" type="text"></input>
           <input placeholder="Last Name" className="R-Input" type="text"></input>
           <input placeholder="Username" className="R-Input" type="text"></input>
           <input placeholder="Email" className="R-Input" type="email"></input>
           <input placeholder="Password" className="R-Input" type="password"></input>
           <input placeholder="Confirm Password" className="R-Input" type="password"></input>
           <button>CREATE</button>
        </form>
        </div>  
      
    </div>
  )
}

export default Register
