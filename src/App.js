import logo from './logo.svg';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
     <h2>To-Do List</h2> 
<TaskInput/>
<TaskList/>
    </div>
  );
}

export default App;
