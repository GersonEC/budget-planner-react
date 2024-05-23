
function ExpenseDialog({
    isOpen,
    categories,
    handleAddExpense,
    handleOnClose
}) {

    return(
        <form>
            <dialog className="expenses_dialog" open={isOpen}>
                <div className="expenses_dialog-content">
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
                </div>
            </dialog>
        </form>
    )
}

export default ExpenseDialog;