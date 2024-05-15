
function ExpenseDialog({
    isOpen,
    categories,
    handleAddExpense,
    handleOnClose
}) {

    return(
        <dialog open={isOpen}>
            <button onClick={handleOnClose}>X</button>
            <label htmlFor="category-select">Scegli la categoria</label>
            <select name="category" id="category-select">
                <option value="">--Please choose an option--</option>
                {
                categories.map((category) => (
                    <option key={category.name} value={category.name}>{category.name}</option>
                ))
                }
            </select>
            <label htmlFor="quantity">Quantitá</label>
            <input
                id='category-quantity'
                type="number"
                min={0}
                name="category-quantity"
            />
            <button onClick={handleAddExpense}>Aggiungi</button>
        </dialog>
    )
}

export default ExpenseDialog;