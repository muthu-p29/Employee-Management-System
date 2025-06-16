import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; 

const Home = () => {
  const [emp, setEmp] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    loadEmp();
  }, []);

  const loadEmp = async () => {
    const result = await axios.get("http://localhost:8080/employeeDetails");
    setEmp(result.data);
  };

  const deleteEmp = async(id)=>{
       await axios.delete(`http://localhost:8080/employeeDetails/${id}`);
       loadEmp();
  }

  return (
    <div className='Home'>
      <div className='container mt-4'>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
             
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Designation</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((employee, index) => (
              <tr key={index}>
                <th scope="row">{employee.id}</th>
               
                <td>{employee.employee_name}</td>
                <td>{employee.gender}</td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
              <td>
  <Link to={`/editUser/${employee.id}`}className="btn btn-primary me-2">Edit</Link>
  <Link to={`/viewUser/${employee.id}`} className="btn btn-info me-2">View</Link>
  <button className="btn btn-danger" onClick={()=>deleteEmp(employee.id)}>Delete</button>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
