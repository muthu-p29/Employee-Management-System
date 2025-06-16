import { useState } from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AddUser from './User/AddUser';
import EditUser from './User/EditUser';
import ViewUser from './User/ViewUser';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addUser' element={<AddUser/>}/>
        <Route path='/editUser/:id' element={<EditUser/>}/>
           <Route path='/viewUser/:id' element={<ViewUser/>}/>
      </Routes>
    
    </Router>
     
    </>
  )
}

export default App
