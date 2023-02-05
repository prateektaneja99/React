import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
function Expenses(props) {
  const [yearVal, setyearval] = useState("2020");
  function changeRetrieved(val) {
    setyearval(val);
  }
  const copyarray = props.items.filter(
    (x) => x.date.getFullYear().toString() === yearVal
  );

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          sendYear={yearVal}
          onChangeHandler={changeRetrieved}
        ></ExpenseFilter>
        <ExpensesChart expenses = {copyarray}></ExpensesChart>
        <ExpensesList datatosend={copyarray}/>
      </Card>
    </li>
  );
}
export default Expenses;
