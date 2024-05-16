
function BudgetSetForm({ handleSetMonthlyBudget, handleAddCategory, handleProceed }) {
  return (
    <form className="budget-set-form">
      <div className="budget-set-form-field">
        <label htmlFor='monthly-budget'>Monthly Budget</label>
        <input
          id='monthly-budget'
          type="number"
          min={0}
          name="monthly-budget"
          required
        />
        <button onClick={handleSetMonthlyBudget}>Set Budget</button>
      </div>
      <div className="budget-set-form-field">
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
      </div>
        <button onClick={handleProceed}>Proceed</button>
    </form>
  );
}

export default BudgetSetForm;