import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import {userRequest} from "../../requestMethods";
export default function WidgetSm() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const getusers= async ()=>{
      try{
        const res = await userRequest.get("users/?new=true");
      setUsers(res.data)
      }
      catch {}
    };
    getusers();
  } ,[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
       {users.map(user=>(
        
        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || "https://th.bing.com/th/id/OIP.YAJlHz4zchNP5zIfsajE9AHaFr?pid=ImgDet&rs=1" }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>

          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
       
      </ul>
    </div>
  );
}
