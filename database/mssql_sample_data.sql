USE EmployeeManagementDB
GO

INSERT INTO Employees (Name, Email, Phone, Salary, DepartmentId)
VALUES 
    ('John Doe', 'john.doe@example.com', '1234567890', 75000.00, 1),
    ('Jane Smith', 'jane.smith@example.com', '2345678901', 82000.00, 2),
    ('Mike Johnson', 'mike.johnson@example.com', '3456789012', 65000.00, 1);
GO
