
import './App.css';

import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
import Reset from './Components/Reset';
import {AuthProvider} from "./Context/AuthContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {


  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/signup" element={<Register></Register>}></Route>
        <Route exact path="/reset" element={<Reset></Reset>}></Route>
        <Route path="/" element={ <PrivateRoute><Dashboard/></PrivateRoute>}></Route>
      </Routes>
    </AuthProvider>


  
   
    </BrowserRouter>
  );
}

export default App;
