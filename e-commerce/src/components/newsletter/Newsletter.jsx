import { Send } from "@mui/icons-material"
import "./newsletter.scss"
const Newsletter = () => {
  return (
    <div className="newsl-container">
       <h1 className="title">Newsletter</h1>
       <div className="desc">Get timely update from your favorite products</div>
       <div className="inputcontainer">
        <input placeholder="your email" className="input" type="email"/>
        <button>
          <Send/>  
        </button>
       </div>

    </div>
  )
}

export default Newsletter
