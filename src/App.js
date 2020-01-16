import React from 'react';
import { createStore } from 'redux';
import counterReducer from './reducers/counter';
import { Provider } from 'react-redux';
import Counter from './components/counter';

//use combine reducers to add multiple reducers

const store = createStore(counterReducer);


function App() {
  return (
    <Provider store = {store}>
      <Counter />
    </Provider>
  );
}

export default App;
