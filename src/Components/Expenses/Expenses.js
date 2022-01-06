import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'

function Expenses() {
    const expenses = [{ id: 'ed1', title: 'Car Servicing', amount: 500, date: new Date(2022, 1, 5) },
    { id: 'ed2', title: 'Car Wah', amount: 200, date: new Date(2021, 1, 12) }]

    return (
        <Card className="expenses">
            <ExpenseItem expense={expenses[0]} />
            <ExpenseItem expense={expenses[1]} />
        </Card>
    )
}

export default Expenses
