import {useParams,Navigate}from "react-router-dom";
import {useEffect,useState,useContext}from "react";
import axios from "axios";
import {AuthContext}from "../context/AuthContext";
export const EmployeeDetails = () => {
  const {id}=useParams();
  const {isAuth}=useContext(AuthContext);
  const [terminated,setTerminated]=useState(0);
  const [Employeedata,setEmployeedata]=useState({});
  useEffect(()=>{
    axios.get(`http://localhost:8080/employees${id}`).then(({data})=>{
      setEmployeedata(data);
      console.log(data)
    })
    console.log(Employeedata.image)
  },[])
  if(!isAuth){
    return <Navigate to={"/login"}/>
  }
  return (
    <div className="user_details">
      <img className="user_image" src={Employeedata.image}/>
      <h4 className="user_name" >{Employeedata.username}</h4>
      <span className="user_salary">${Employeedata.salary}</span>
      <span className="tasks">
      {Employeedata.tasks.map((ev)=>(
        <li className="task">{ev.tasks}</li>
        ))}
      </span>
      Status: <b className="status">{Employeedata.status}</b>
      Title: <b className="title">{Employeedata.team}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire" onClick={(()=>{
        setTerminated(terminated+1);
      })}>Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
