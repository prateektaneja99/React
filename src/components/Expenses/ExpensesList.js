import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
function Expenseslist(props) {
  if (props.datatosend.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses !</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.datatosend.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
}
export default Expenseslist;
