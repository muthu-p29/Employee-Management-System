package com.example.EmployeeCrud.repository;

import com.example.EmployeeCrud.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer> {
}
