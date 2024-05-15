
function CategoryForm({ handleAddCategory }) {
  return (
    <form>
      <label htmlFor='category-name'>Category Name</label>
        <input
          id='category-name'
          type="text"
          name="category-name"
        />
        <label htmlFor='category-budget'>Category Budget</label>
        <input
          id='category-budget'
          type="number"
          min={0}
          name="category-budget"
        />
        <button onClick={handleAddCategory}>Add Category</button>
    </form>
     
  )
}

export default CategoryForm