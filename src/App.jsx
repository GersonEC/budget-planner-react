import { useState } from 'react'
import { useFormStatus } from "react-dom";
// import action from './actions.js';
import './App.css'
import ExpenseDialog from './components/ExpenseDialog.jsx';
import BudgetForm from './components/BudgetForm.jsx';
import CategoryForm from './components/CategoryForm.jsx';
import CategoryList from './components/CategoryList';

function Submit() {
  const status = useFormStatus();
  return <button disabled={status.pending}>Submit</button>
}

function App() {
  const [monthlyBudget, setMonthlyBudget] = useState(0)
  const [categories, setCategories] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const handleSetMonthlyBudget = e => {
    e.preventDefault()
    const form = e.target.form
    const budget = form['monthly-budget'].value
    setMonthlyBudget(Number(budget))
  }

  const handleAddCategory = e => {
    e.preventDefault()
    const form = e.target.form
    const categoryName = form['category-name'].value
    const categoryBudget = Number(form['category-budget'].value)
    setCategories([...categories, { name: categoryName, budget: categoryBudget, used: 0 }])
    form['category-name'].value = ''
    form['category-budget'].value = null;
    //reduce from monthly budget
    const newBudget = monthlyBudget - categoryBudget;
    setMonthlyBudget(newBudget);
  }

  const handleAddExpense = e => {
    e.preventDefault()
    const form = e.target.form
    const categoryName = form['category-select'].value
    const categoryQuantity = Number(form['category-quantity'].value)
    //reduce category budget
    const newCategories = categories.map(category => {
      if (category.name === categoryName) {
        return {
          ...category,
          budget: category.budget - categoryQuantity,
          used: category.used + categoryQuantity
        }
      }
      return category
    })
    setCategories(newCategories)
    setIsOpen(false)
    form['category-select'].value = ''
    form['category-quantity'].value = null;
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column'}} /*action={action}*/>
      <h1>Budget Planner</h1>
      <BudgetForm monthlyBudget={monthlyBudget} handleSetMonthlyBudget={handleSetMonthlyBudget} />
      <CategoryForm handleAddCategory={handleAddCategory} />
      <CategoryList categories={categories} />
      <button onClick={() => setIsOpen(true)}>Aggiungi Spesa</button>
      <ExpenseDialog
        isOpen={isOpen}
        categories={categories}
        handleAddExpense={handleAddExpense}
        handleOnClose={() => setIsOpen(false)}
      />
      {/* <Submit /> */}
    </div>
  )
}

export default App
