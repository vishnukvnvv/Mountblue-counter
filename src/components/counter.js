import React from 'react';
import { increment, decrement } from '../actions/actions'
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick = {() => dispatch(increment())}>Increase count</button>
            <button onClick = {() => dispatch(decrement())}>Decrease count</button>

        </div>
    )
}

export default Counter;