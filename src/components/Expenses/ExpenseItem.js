import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';



const ExpenseItem= (props) => {
    //React hooks must only be called directly inside react component functions...
    /*
    UseState(parameter) returns an array of two elements where the first 
    element is the current state value and the second 
    element is a function that is to be called on changing the 
    value assigned to the first element.
    */
    const [title, setTitle] = useState(props.title);
    //console.log('New State:' + title);

    const clickHandler = ()=>{
        //Won't be executed immediately until this component function is re-executed...
        setTitle('Updated!');
        //console.log(title);
    };

    return(
        <li>
        <Card className='expense-item'>
           <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* Just point to the name of the function not state it directly */}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        </li>
    );
}

export default ExpenseItem;