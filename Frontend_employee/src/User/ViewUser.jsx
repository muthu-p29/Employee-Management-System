import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ViewUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [emp, setEmp] = useState({
    employee_name: "",
    gender: "",
    designation: "",
    salary: "",
  });

  useEffect(() => {
    loadEmp();
  }, []);

  const loadEmp = async () => {
    const result = await axios.get(`http://localhost:8080/employeeDetails/${id}`);
    setEmp(result.data);
  };

  return (
    <div>
      <div className='container mt-4'>
        <h1 className='mb-4'>Employee Details</h1>
        <div className='card p-4 shadow'>
          <ul className='list-group'>
            <li className='list-group-item'><strong>ID:</strong> {emp.id}</li>
            <li className='list-group-item'><strong>Name:</strong> {emp.employee_name}</li>
            <li className='list-group-item'><strong>Gender:</strong> {emp.gender}</li>
            <li className='list-group-item'><strong>Designation:</strong> {emp.designation}</li>
            <li className='list-group-item'><strong>Salary:</strong> ₹{emp.salary}</li>
          </ul>
          <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
