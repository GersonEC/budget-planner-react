
function BudgetForm({ monthlyBudget, handleSetMonthlyBudget}) {
  return (
    <form>
      <h2>Budget - {monthlyBudget}</h2>
      <label htmlFor='monthly-budget'>Monthly Budget</label>
      <input
        id='monthly-budget'
        type="number"
        min={0}
        name="monthly-budget"
      />
      <button onClick={handleSetMonthlyBudget}>Set Budget</button>
    </form>
  );
}

export default BudgetForm;