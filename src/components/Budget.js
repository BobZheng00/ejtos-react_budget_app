import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        if (updatedBudget > 20000) {
            alert("Budget cannot exceed £20000")
        } else if (updatedBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending")
        } else {
            setNewBudget(updatedBudget);
            dispatch({ 
                type: 'SET_BUDGET', 
                payload: parseFloat(updatedBudget) 
            });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
