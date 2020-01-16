import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { createStore } from 'redux';

// //actions
// const increment = () => {
//     return {
//         type: 'INCREMENT',
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT',
//     }
// }

// //reducers
// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT': return state+1;
//         case 'DECREMENT': return state-1;
//     }
// }

// //store
// let store = createStore(counter);

// //display it in console
// store.subscribe(() => console.log(store.getState()));


// //dispatch
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
