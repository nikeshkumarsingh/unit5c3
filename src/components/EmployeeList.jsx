import {useEffect,useState}from "react";
import {Link}from "react-router-dom";
import axios from "axios";
const useQuery=(q)=>{
  const param=new URLSearchParams(window.location.search);
  return param.get(q);
}
export const EmployeeList = () => {
  const [employee,setEmployee]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/employee").then(({data})=>{
      setEmployee(data);
    })
  },[]);
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {employee.map((emp)=>(
        <Link to={`/employees/${emp.id}`}>
      <div className="employee_card">
        <img className="employee_image"  src={emp.image}/>
        <span className="employee_name">{emp.employee_name}</span>
        <span className="employee_title">{emp.title}</span>
      </div>
      </Link>
      ))}
    </div>
  );
};
