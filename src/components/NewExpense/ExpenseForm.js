import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [display, setDisplay] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSave(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  function cancelHandler() {
    setDisplay(false);
  }
  function newHandler() {
    setDisplay(true);
  }

  let output;
  if (display) {
    output = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2024-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            /> 
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  } else {
    output = (
      <div className="new-expense__actions_1">
        <button onClick={newHandler}>Add New Expense</button>
      </div>
    );
  }
  return output;
}
export default ExpenseForm;
