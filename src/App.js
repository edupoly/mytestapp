import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Component1 from './components/Component1';
import Countries from './components/Countries';

function App() {
  return (
    <div className='betterview'>
      <Countries></Countries>
      <Component1></Component1>
      <Todolist></Todolist>
      <Counter></Counter>
      <h1 data-testid='myname'>Praveen Gubbala</h1>
      <h2>Welcome to testing React Components</h2>
      <h3>Praveen G</h3>
    </div>
  );
}

export default App;
