import { useState } from 'react'
import { useFormStatus } from "react-dom";
import action from './actions.js';
import './App.css'

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
    const categoryBudget = form['category-budget'].value
    setCategories([...categories, { name: categoryName, budget: Number(categoryBudget) }])
  }

  const handleAddExpense = e => {
    e.preventDefault()
    const form = e.target.form
    const categoryName = form['category-select'].value
    const categoryQuantity = form['category-quantity'].value
    console.log({categoryName})
    console.log(Number(categoryQuantity))
    setIsOpen(false)
  }


  return (
    <form style={{ display: 'flex', flexDirection: 'column'}} action={action}>
      <h1>Set up:</h1>
      <h2>Budget - {monthlyBudget}</h2>
      <label htmlFor='monthly-budget'>Monthly Budget</label>
      <input
        id='monthly-budget'
        type="number"
        min={0}
        name="monthly-budget"
      />
      <button onClick={handleSetMonthlyBudget}>Set Budget</button>

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
      {
        categories.map((category) => (
          <p key={category.name}>Category: {category.name} - {category.budget}</p>
        ))
      }

      <button onClick={() => setIsOpen(true)}>Aggiungi Spesa</button>
      <dialog open={isOpen}>
        <label for="category-select">Scegli la categoria</label>
        <select name="category" id="category-select">
          <option value="">--Please choose an option--</option>
          {
            categories.map((category) => (
              <option key={category.name} value={category.name}>{category.name}</option>
            ))
          }
        </select>
        <label for="quantity">Quantitá</label>
        <input
          id='category-quantity'
          type="number"
          min={0}
          name="category-quantity"
        />
        <button onClick={handleAddExpense}>Aggiungi</button>
      </dialog>
      {/* <Submit /> */}
    </form>
  )
}

export default App
