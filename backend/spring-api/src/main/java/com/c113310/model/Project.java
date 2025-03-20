package com.c113310.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Project", schema = "employee_management_db")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "projectid")
    private Integer projectId;

    @Column(name = "projectname", nullable = false)
    private String projectName;

    @Column(name = "startdate", nullable = false)
    private LocalDate startDate;

    @Column(name = "enddate")
    private LocalDate endDate;

    // Getters
    public Integer getProjectId() { return projectId; }
    public String getProjectName() { return projectName; }
    public LocalDate getStartDate() { return startDate; }
    public LocalDate getEndDate() { return endDate; }

    // Setters
    public void setProjectId(Integer projectId) { this.projectId = projectId; }
    public void setProjectName(String projectName) { this.projectName = projectName; }
    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }
    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }
}
