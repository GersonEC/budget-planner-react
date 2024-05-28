import { useState } from 'react'
// import { useFormStatus } from "react-dom";
// import action from './actions.js';
import './App.css'
import ExpenseDialog from './components/ExpenseDialog.jsx';
import BudgetSetForm from './components/BudgetSetForm.jsx';
import CategoryList from './components/CategoryList';
import Expenses from './components/Expenses';
import Category from './components/Category';
import { categories as categoryList } from "./data";

// function Submit() {
//   const status = useFormStatus();
//   return <button disabled={status.pending}>Submit</button>
// }

function App() {
  const [monthlyBudget, setMonthlyBudget] = useState(0)
  const [categories, setCategories] = useState(categoryList)
  const [isOpen, setIsOpen] = useState(false)
  const [proceed, setProceed] = useState(false)
  const [errors, setErrors] = useState([])

  const handleSetMonthlyBudget = e => {
    e.preventDefault()
    const form = e.target.form
    const budget = form['monthly-budget'].value
    if(budget <= 0) {
      setErrors([...errors, 'Monthly budget must be greater than 0'])
      return;
    }
    setMonthlyBudget(Number(budget))
  }

  const handleAddCategory = e => {
    e.preventDefault()
    const form = e.target.form
    const categoryName = form['category-name'].value
    const categoryBudget = Number(form['category-budget'].value)
    //reduce from monthly budget
    const newBudget = monthlyBudget - categoryBudget;
    //budget validation
    if(newBudget < 0) {
      setErrors([...errors, 'Monthly budget exceeded'])
      return;
    }
    if( categoryName === '' || categoryBudget === 0) {
      setErrors([...errors, 'Category name and budget are required'])
      return;
    }
    setCategories([...categories, { name: categoryName, budget: categoryBudget, used: 0 }])
    form['category-name'].value = ''
    form['category-budget'].value = null;
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

  const handleProceed = e => {
    e.preventDefault()
    //validation
    let errors = []
    if(monthlyBudget === 0) {
      errors.push('Please set a monthly budget')
    }
    if(categories.length === 0) {
      errors.push('Please add at least one category')
    }
    setErrors(errors)
    if(errors.length === 0) {
      setProceed(true)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}} /*action={action}*/>
      <h1 style={{ color: 'orange'}}>Budget Planner</h1>
      <h2>1120€</h2>
      <span>1500€</span>
      <Category />
      <button onClick={() => setIsOpen(true)}>Add Expense</button>
      <ExpenseDialog isOpen={isOpen} categories={categories} handleAddExpense={handleAddExpense} handleOnClose={() => setIsOpen(false)} />
    </div>
  )
}

export default App
