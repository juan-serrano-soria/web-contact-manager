import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [numClicks, setNumClicks] = useState(0);

  useEffect(() => {
    alert('Number of clicks: ' + numClicks);
  });

  function increment() {
    setCounter(counter + 1);
    setNumClicks(numClicks + 1);
  }

  function decrement() {
    setCounter(counter - 1);
    setNumClicks(numClicks + 1);
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const el = <Counter />;

ReactDOM.render(el, document.getElementById('root'));
