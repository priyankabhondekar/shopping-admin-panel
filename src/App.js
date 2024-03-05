import logo from './logo.svg';
import './App.css';
import  {Login}  from './login/Login';
import {Pages} from './pages/Pages';
import {Route,Routes,Navigate} from "react-router-dom";
import {Button} from "@mui/material";
function App() {
  
  return <div>
   {/* <Button variant="contained">Login</Button> */}
    <Routes>
        <Route path='/' element={<Navigate to='/Login' />}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/pages/*' element={<Pages></Pages>}></Route>
      </Routes>
         </div>;
  
}

export default App;
