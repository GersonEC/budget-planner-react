import CategoryList from "./CategoryList";
import ExpenseDialog from "./ExpenseDialog";

function Expenses({ monthlyBudget, categories, handleAddExpense, isOpen, setIsOpen}) {
  
  return(
    <div className="expenses">
      <h2 className="expenses_monthly-budget">{monthlyBudget}</h2>
      <CategoryList categories={categories} />
      <button onClick={() => setIsOpen(true)}>Aggiungi Spesa</button>
      <ExpenseDialog
        isOpen={isOpen}
        categories={categories}
        handleAddExpense={handleAddExpense}
        handleOnClose={() => setIsOpen(false)}
      />
    </div>
  )
}

export default Expenses;