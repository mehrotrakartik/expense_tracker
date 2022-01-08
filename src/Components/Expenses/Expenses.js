import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState(2022);
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }
    return (
        <div>            
            <Card className="expenses">
                <ExpensesFilter onFilterChange={filterChangeHandler} defaultFilteredYear={filteredYear} />
                <ExpenseItem expense={props.expenses[0]} />
                <ExpenseItem expense={props.expenses[1]} />
            </Card>
        </div>

    )
}

export default Expenses
