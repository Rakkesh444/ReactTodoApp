import logo from './logo.svg';
import './App.css';
import { StudentView } from './Components/StudentView';
function App() {
  return (
    <div className="App">
      <h3 className='text-amber-50 py-10 text-3xl'>Student List</h3>
      <StudentView />
    </div>
  );
}

export default App;
