import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        
        const updatedCurrency = event.target.value;
        console.log(updatedCurrency)
        setNewCurrency(updatedCurrency);
            dispatch({ 
                type: 'SET_CURRENCY', 
                payload: updatedCurrency
            });
    }
    return (
        <div className='alert alert-secondary'>
        <span>Currency:{currency}</span>
        <select value={newCurrency} onChange={handleCurrencyChange}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
        </div>
            );
}

export default Currency;