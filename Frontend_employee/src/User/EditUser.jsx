import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(()=>{
    loadEmployee();
  },[]);

  const [emp, setEmp] = useState({
    employee_name: "",
    gender: "",
    designation: "",
    salary: "",
  });

  const { employee_name, gender, designation, salary } = emp;

  const onInputChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/employeeDetails/${id}`, emp);
    navigate("/");
  };

  const loadEmployee=async()=>{
     const result = await axios.get(`http://localhost:8080/employeeDetails/${id}`);
     setEmp(result.data);
  }
  return (
<div className="container-sm mt-5">

      <div className="card p-4 shadow">
        <h2 className="mb-4 text-center">Edit Employee Details</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="employee_name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="employee_name"
              value={employee_name}
              onChange={onInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select
              className="form-select"
              name="gender"
              value={gender}
              onChange={onInputChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="designation" className="form-label">Designation</label>
            <input
              type="text"
              className="form-control"
              name="designation"
              placeholder="Enter designation"
              value={designation}
              onChange={onInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="salary" className="form-label">Salary</label>
            <input
              type="number"
              className="form-control"
              name="salary"
              placeholder="Enter salary"
              value={salary}
              onChange={onInputChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
