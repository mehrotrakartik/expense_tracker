import React, {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const DUMMY_EXPENSES = [{ id: 'ed1', title: 'Car Servicing', amount: 500, date: new Date(2022, 1, 5) },
  { id: 'ed2', title: 'Car Wash', amount: 200, date: new Date(2021, 1, 12) }]

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
