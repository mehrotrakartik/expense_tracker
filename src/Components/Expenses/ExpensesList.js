import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {
    let expensesContent;       
    if (props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found No Expense</h2>
    }
    return <ul className="expenses-list">
        {
            props.items.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
        }
    </ul>
}

export default ExpensesList