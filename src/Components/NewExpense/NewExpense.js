import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{
    const [formVisibility, setFormVisibility]=useState(false)

    const startEditingHandler = () => {
        setFormVisibility(true);
    }
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
           ...enteredExpenseData,
           id: Math.random().toString() 
        }
        props.onAddExpense(expenseData);
        setFormVisibility(false);
    }

    const makeFormInvisible = () => {
        setFormVisibility(false);
    }
    return <div className='new-expense'>
        {!formVisibility && <button onClick={startEditingHandler}>Add New Expense</button> }
        { formVisibility && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancelClick={makeFormInvisible}/> }
    </div>
}

export default NewExpense