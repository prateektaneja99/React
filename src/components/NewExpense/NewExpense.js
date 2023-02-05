import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props)
{
    function formSaveHandler(datafromExpenseform)
    {
        const expenseData={
            ...datafromExpenseform,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSave = {formSaveHandler}/>
        </div>
    );
}
export default NewExpense;