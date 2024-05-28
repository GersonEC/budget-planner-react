import { categories } from "../data";
import ProgressBar from "./ProgressBar";

const category = categories[0];
function Category() {
  return(
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <label for="name">{category.name}</label>
        <ProgressBar category={category} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <span style={{fontWeight: '600'}}>{category.used}</span>
        <span style={{fontSize: '0.8rem'}}>{category.budget}</span>
      </div>
    </div>
  )
}

export default Category;