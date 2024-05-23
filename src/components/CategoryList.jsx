
function CategoryList({ categories }) {
  return (
    <div>
      {
        categories.map((category) => (
          <div key={category.name}>
            <img src="/smartphone.svg" width='52px' alt="smartphone" />
            <p>
              <span><strong>{category.name}</strong></span>{' '}
              <span style={{color: 'green'}}>{category.budget} </span> / {' '}
              <span style={{color: 'red'}}>{category.used} </span>
            </p>
            
          </div>
        ))
      }
    </div>
  );
}

export default CategoryList