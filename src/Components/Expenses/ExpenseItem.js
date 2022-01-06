import React from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'


function ExpenseItem(props) {
    const clickHandler = () => {
        
    }
    return (        
        <Card className='expense-item'>
            <ExpenseDate date = {props.expense.date} />
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>₹ {props.expense.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem
