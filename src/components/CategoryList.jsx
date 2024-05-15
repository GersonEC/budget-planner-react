
function CategoryList({ categories }) {
  return (
    <div>
      {
        categories.map((category) => (
          <p key={category.name}>
            {category.name} - {' '}
            <span style={{color: 'green'}}>{category.budget} </span> - {' '}
            <span style={{color: 'red'}}>{category.used} </span>
          </p>
        ))
      }
    </div>
  );
}

export default CategoryList