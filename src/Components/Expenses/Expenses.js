import React, {useState} from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    let filteredExpenses = props.expenses
    const [filteredYear, setFilteredYear] = useState('9999');
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }

    if(filteredYear !== '9999')
    {
        filteredExpenses = props.expenses.filter(expense => {        
            return expense.date.getFullYear().toString() === filteredYear;
        })    
    }
    return (
        <div>            
            <Card className="expenses">
                <ExpensesFilter onFilterChange={filterChangeHandler} defaultFilteredYear={filteredYear} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses
