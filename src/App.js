import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Component1 from './components/Component1';
import Countries from './components/Countries';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='betterview'>
      <h1 data-testid='myname' id='launchid'>Praveen Gubbala</h1>
      <Link to="/counter" id="counterlink">Counter</Link> &nbsp; &nbsp;
      <Link to="/todolist" id="todolint">Todolist</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
