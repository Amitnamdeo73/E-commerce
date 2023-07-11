import { Link } from "react-router-dom"
import"./catogaryItem.scss"

const CategoryItem = ({item}) => {
  return (
    <div className="categoryItem-container">
      <Link to={`/products/${item.cat}`}>
      <img className="imagecategoryItem" src={item.img} alt=""></img>
      <div className="infoItem">
        <h1 className="title">{item.title}</h1>
        <button className="button">SHOP NOW</button>
      </div>
      </Link>
    </div>
  )
}

export default CategoryItem
