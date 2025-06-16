package com.example.EmployeeCrud.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.context.annotation.Primary;

@Data
@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String employee_name;

    public Employee(String designation, String employee_name, String gender, String salary) {
        this.designation = designation;
        this.employee_name = employee_name;
        this.gender = gender;
        this.salary = salary;
    }

    private String gender;
    private String designation;
    private String salary;


    public Employee(){

    }
}
