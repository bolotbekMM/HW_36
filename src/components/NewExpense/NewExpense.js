import React from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHundler = (enteredExpenseData) => {
         const expenseData = {
            ...enteredExpenseData,
             id: Math.random().toString(),
        }

         props.onAddExpense(expenseData)
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHundler} />
    </div>
}

export default NewExpense;