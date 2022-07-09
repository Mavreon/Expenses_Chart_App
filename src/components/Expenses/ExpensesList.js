import React from "react";
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

//It is possible to store JSX code in a variable...


const ExpensesList = (props) => {
    let expensesContent = <h2 className="expenses-list__fallback">No Expenses Found.</h2>;

    if(props.filteredExpenses.length > 0)
    {
        expensesContent = props.filteredExpenses.map((expense) => (
            <ExpenseItem 
            key = {expense.id} 
            title = {expense.title} 
            amount = {expense.amount} 
            date = {expense.date}/> ));
    };

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    );
};

export default ExpensesList;