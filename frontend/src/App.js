
import './App.css';
import Home from './Pages/Home/Home'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
    
    </Routes>
    </div>
  );
}

export default App;
