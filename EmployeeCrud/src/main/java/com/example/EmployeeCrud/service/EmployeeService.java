package com.example.EmployeeCrud.service;

import com.example.EmployeeCrud.model.Employee;
import com.example.EmployeeCrud.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepo empRepo;

    public Employee addEmployee(Employee employee) {
        return empRepo.save(employee);
    }

    public List<Employee> getEmployeeDetails() {
        return empRepo.findAll();
    }

    public Employee getEmployeeByid(int id) {
        return empRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee with ID " + id + " not found"));
    }

    public void updateEmployee(int id, Employee updatedEmp) {
        Employee existingEmp = empRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee with ID " + id + " not found"));

        existingEmp.setEmployee_name(updatedEmp.getEmployee_name());
        existingEmp.setGender(updatedEmp.getGender());
        existingEmp.setDesignation(updatedEmp.getDesignation());
        existingEmp.setSalary(updatedEmp.getSalary());

        empRepo.save(existingEmp);
    }

    public void deleteEmployee(int id) {
        if (!empRepo.existsById(id)) {
            throw new RuntimeException("Employee with ID " + id + " not found");
        }
        empRepo.deleteById(id);
    }
}
