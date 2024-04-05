import logo from './logo.svg';
import './App.css';
import {
  useState
} from 'react'

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter</h2>
      <div data-testid="count">{count}</div>
      <button onClick={increment} data-testid="increment-button">Increment</button>
      <button onClick={decrement} data-testid="decrement-button">Decrement</button>
    </div>
  );
}



export default App;
