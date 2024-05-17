import CategoryList from "./CategoryList";
import ExpenseDialog from "./ExpenseDialog";

function Expenses({ monthlyBudget, categories, handleAddExpense, isOpen, setIsOpen}) {
  
  return(
    <>
      <h2>Budget - {monthlyBudget}</h2>
      <CategoryList categories={categories} />
      <button onClick={() => setIsOpen(true)}>Aggiungi Spesa</button>
      <ExpenseDialog
        isOpen={isOpen}
        categories={categories}
        handleAddExpense={handleAddExpense}
        handleOnClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default Expenses;