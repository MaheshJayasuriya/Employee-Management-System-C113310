-- Create and use the database
CREATE DATABASE IF NOT EXISTS employee_management_db;
USE employee_management_db;

-- Create Department table if not exists
CREATE TABLE IF NOT EXISTS Department (
    DepartmentId INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Location VARCHAR(100) NOT NULL
);

-- Create Project table if not exists
CREATE TABLE IF NOT EXISTS Project (
    ProjectId INT PRIMARY KEY AUTO_INCREMENT,
    ProjectName VARCHAR(100) NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NULL
);

-- Insert sample departments
INSERT INTO Department (Name, Location) VALUES
    ('Engineering', 'Building A'),
    ('Sales', 'Building B'),
    ('Marketing', 'Building C'),
    ('Human Resources', 'Building A'),
    ('Finance', 'Building B');

-- Insert sample projects
INSERT INTO Project (ProjectName, StartDate, EndDate) VALUES
    ('Web Portal', '2024-01-01', '2024-06-30'),
    ('Mobile App', '2024-02-01', '2024-08-31'),
    ('Cloud Migration', '2024-03-01', NULL),
    ('Data Analytics', '2024-01-15', '2024-12-31'),
    ('Security Upgrade', '2024-04-01', '2024-07-31');
