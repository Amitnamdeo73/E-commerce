import CategoryItem from "./CategoryItem"
import { categories } from "../data"
import "./categories.scss"
const Categories = () => {
  return (
    <div className="Categories-container">
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      )
      )}
    </div>
  )
}

export default Categories
