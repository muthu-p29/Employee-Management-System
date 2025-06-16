package com.example.EmployeeCrud.controller;

import com.example.EmployeeCrud.model.Employee;
import com.example.EmployeeCrud.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/employeeDetails")
public class EmployeeController {

    @Autowired
    private EmployeeService empserv;

    @PostMapping
    public String addEmployee(@RequestBody Employee employee) {
        empserv.addEmployee(employee);
        return "Details Added Successfully";
    }

    @GetMapping
    public List<Employee> getEmployeeDetails() {
        return empserv.getEmployeeDetails();
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable int id) {
        return empserv.getEmployeeByid(id);
    }

    @PutMapping("/{id}")
    public String updateEmployee(@PathVariable int id, @RequestBody Employee emp) {
        empserv.updateEmployee(id, emp);
        return "Employee updated successfully";
    }

    @DeleteMapping("/{id}")
    public String deleteEmp(@PathVariable int id) {
        empserv.deleteEmployee(id);
        return "Employee details removed successfully";
    }
}
