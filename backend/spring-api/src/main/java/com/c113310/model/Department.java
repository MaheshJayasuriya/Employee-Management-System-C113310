package com.c113310.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Department", schema = "employee_management_db")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "departmentid")
    private Integer departmentId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "location", nullable = false)
    private String location;

    // Getters
    public Integer getDepartmentId() { return departmentId; }
    public String getName() { return name; }
    public String getLocation() { return location; }

    // Setters
    public void setDepartmentId(Integer departmentId) { this.departmentId = departmentId; }
    public void setName(String name) { this.name = name; }
    public void setLocation(String location) { this.location = location; }
}
