import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
