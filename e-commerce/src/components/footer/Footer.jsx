import { Facebook, Instagram, Language, MailOutline, Phone, Room, Twitter } from "@mui/icons-material"
import "./footer.scss"

const Footer = () => {
  return (
    <div className="fotter-container">
     <div className="left">
      <h1 className="logo">
        Namdeo's fashion.
      </h1>
      <p className="desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Officiis id est corporis quibusdam accusamus laborum quidem 
        velit tempore aliquid, fugiat nemo doloribus. Praesentium ipsum 
        veniam inventore dolor odit id officia.
      </p>
      <div className="socialsites">
        <div className="socialicon">
          <Facebook/>
        </div>
        <div className="socialicon">
          <Instagram/>
        </div>
        <div className="socialicon">
          <Twitter/>
        </div>
      </div>
      
     </div>
     <div className="centre">
      <h3 className="title">Useful Links</h3>

      <ul className="list">
        <li className="listitem">Home</li>
        <li className="listitem">Cart</li>
        <li className="listitem">Accessories</li>
        <li className="listitem">My Account</li>
        <li className="listitem">Order Tracking</li>
        <li className="listitem">Wishlist</li>
        <li className="listitem">Terms</li>
      </ul>
     </div>



     <div className="right">
      <h3 className="title">Contact Us</h3>
      <div className="contactitem">
        <Room style={{marginRight:"20px"}}/> Ward No. 7 Ratanganj Bijawar distt Chhatarpur MP
      </div>
      <div className="contactitem">
        <Phone style={{marginRight:"20px"}}/> 09399622367
        
      </div>
      <div className="contactitem">
        <MailOutline style={{marginRight:"20px"}}/> amit.snamdeo73@gmail.com</div>
      <div className="contactitem">
        <Language style={{marginRight:"20px"}}/> amitnamdeo73.netlify.app</div>
      <img className="payment" src="" alt="" />
     </div>
     

      
    </div>
  )
}

export default Footer
