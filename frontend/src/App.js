import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ShareContact from './pages/ShareContact';
import ContactList from './pages/ContactList';
import AddContact from './pages/AddContact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Dashboard/>}>
         <Route path="/addcontact" element={<AddContact/>}></Route>
         <Route path="/contactlist" element={<ContactList/>}></Route>
         <Route path="/sharecontact" element={<ShareContact/>}></Route>
        </Route>
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
