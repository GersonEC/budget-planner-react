function ProgressBar({ category }) {
  return (
    <progress
      type="range"
      id="name"
      name="name"
      max={category.budget}
      value={category.used}
    />
  );
}

export default ProgressBar