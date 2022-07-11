import React,{useState} from "react";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../Chart/ExpensesChart";

const Expenses = (props) => {

    const [filteredYear, changeFilterYear] = useState('2022');
    const filterChangeHandler = selectedYear =>{
         changeFilterYear(selectedYear);
         console.log(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return (expense.date.getFullYear().toString() === filteredYear);
    });

    return(
        <Card className="expenses">
            <ExpensesFilter onFilterChange ={filterChangeHandler} value={filteredYear}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList filteredExpenses = {filteredExpenses}></ExpensesList>
        </Card>
    );
}

export default Expenses;