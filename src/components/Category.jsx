import { categories } from "../data";

const category = categories[0];
function Category() {
  return(
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <label for="name">{category.name}</label>
        <input
          type="range"
          id="name"
          name="name"
          min="0"
          max={category.budget}
          value={category.used}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <span>{category.used}</span>
        <span>{category.budget}</span>
      </div>
    </div>
  )
}

export default Category;