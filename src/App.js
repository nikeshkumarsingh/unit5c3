
import {Routes,Route}from "react-router-dom";
import {Home}from "./components/Home";
import {Navbar}from "./components/Navbar";
import {EmployeeList}from "./components/EmployeeList";
import {EmployeeDetails}from "./components/EmployeeDetails";
import {Login}from "./components/Login";
import {Logout}from "./components/Logout";
import {Private}from "./components/Private";
import {Admin}from "./components/Admin";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/employees" element={<EmployeeList/>}></Route>
       <Route path="/employees/:id" element={<Private><EmployeeDetails/></Private>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/logout" element={<Logout/>}></Route>
       <Route path="/admin" element={<Admin/>}></Route>
    </Routes>     
    </div>
  );
}

export default App;
