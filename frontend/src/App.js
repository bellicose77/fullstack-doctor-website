
import './App.css';
import Home from './Pages/Home/Home'
import { Routes, Route, Link } from "react-router-dom";
import Appoinment from './Pages/Appoinment/Appoinment';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/appointment' element = {<Appoinment/>}/>
    
    </Routes>
    </div>
  );
}

export default App;
