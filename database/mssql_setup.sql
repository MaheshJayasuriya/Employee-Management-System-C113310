USE master
GO

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'EmployeeManagementDB')
BEGIN
    CREATE DATABASE EmployeeManagementDB
END
GO

USE EmployeeManagementDB
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Employees')
BEGIN
    CREATE TABLE Employees (
        EmployeeId INT PRIMARY KEY IDENTITY(1,1),
        Name NVARCHAR(100) NOT NULL,
        Email NVARCHAR(100) NOT NULL,
        Phone NVARCHAR(20),
        Salary DECIMAL(18,2) NOT NULL,
        DepartmentId INT NOT NULL
    )
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'EmployeeProjects')
BEGIN
    CREATE TABLE EmployeeProjects (
        EmployeeId INT,
        ProjectId INT,
        PRIMARY KEY (EmployeeId, ProjectId),
        CONSTRAINT FK_EmployeeProject_Employee FOREIGN KEY (EmployeeId) 
            REFERENCES Employees(EmployeeId)
    )
END
GO
