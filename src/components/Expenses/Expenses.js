import React,{useState} from "react";
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

const Expenses = (props) => {

    const [filterYear, changeFilterYear] = useState('2022');

    const filterChangeHandler = selectedYear =>{
         changeFilterYear(selectedYear);
         console.log(selectedYear);
    };

    const expenses = props.expenses;
    return(
        <Card className="expenses">
            <ExpensesFilter onFilterChange ={filterChangeHandler} value={filterYear}></ExpensesFilter>
            <ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date}></ExpenseItem>
            <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date}></ExpenseItem>
            <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date}></ExpenseItem>
            <ExpenseItem title = {expenses[3].title} amount = {expenses[3].amount} date = {expenses[3].date}></ExpenseItem>
        </Card>
    );
}

export default Expenses;