
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/login';
import Note from './components/createNote';
import AllNote from './components/Notes';

function App() {
  return (
    <div className="App">
     <h1>Notes App</h1>
     <Routes>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/note' element={<Note/>}></Route>
      <Route path='/allnote' element={<AllNote/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
