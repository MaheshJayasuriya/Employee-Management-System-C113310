Assignment Title: Full-Stack Application with ASP.NET Core, Spring Boot, Angular, and React 
Objective: 
Students will develop a full-stack web application where the backend consists of ASP.NET Core 
Web API and Spring Boot, while the frontend has implementations in Angular and React. 
 
 
Scenario: Employee Management System 
    Students will create an Employee Management System that allows users to: 
    • Add, update, delete, and list employees. 
    • View employees using either the Angular or React frontend. 
    • Handle backend operations using ASP.NET Core Web API and Spring Boot. 
 
 
Assignment Tasks: 
1. Backend Development 
    • ASP.NET Core Web API (MSSQL): 
    o Create an API with CRUD operations for Employee (Id, Name, Email, Department, 
        Salary). 
    o Use Entity Framework Core for database interaction. 
    o Implement validation and error handling. 
    • Spring Boot (MySQL): 
    o Develop another API with CRUD operations for Department (Id, Name, Location). 
    o Use Spring Data JPA for database interaction. 
    o Implement validation and error handling. 
    
2. Frontend  Development 
    • Angular Frontend: 
    o Develop an Angular app that consumes both APIs. 
    o Implement components for listing, adding, updating, and deleting employees and 
    departments. 
    o Use Angular Material for UI styling. 
    React Frontend: 
    o Create a React app that consumes both APIs. 
    o Implement components for listing, adding, updating, and deleting projects and 
    Employee project details. 
    o Implement components using React Hooks. 
    o Use Bootstrap or Tailwind CSS for styling. 
    Bonus Challenges (Optional) 
    • Implement authentication using JWT. 
    • Use Swagger UI for API documentation. 
    • Deploy the application using Docker. 
    Submission Requirements 
    1. GitHub Repository with separate folders for backend (ASP.NET Core & Spring Boot) and 
        frontend (Angular & React). 
    2. README.md file with setup instructions. 
    3. Database scripts to initialize MSSQL and MySQL. 
    4. Screenshots or demo video showing CRUD operations. 
        ER Diagram for Employee Management System 
        Entities & Relationships: 
1. Employee 
    o EmployeeId (Primary Key) 
    o Name 
    o Email 
    o Phone 
    o Salary 
    o DepartmentId (Foreign Key referencing Department) 
2. Department 
    o DepartmentId (Primary Key) 
    o Name 
    o Location 
3. Project 
    o ProjectId (Primary Key) 
    o ProjectName 
    o StartDate 
    o EndDate 
4. Employee_Project (Join Table) 
    o EmployeeId (Foreign Key referencing Employee) 
    o ProjectId (Foreign Key referencing Project)

erDiagram
    EMPLOYEE {
        int EmployeeId
        string Name
        string Email
        string Phone
        double Salary
        int DepartmentId
    }

    DEPARTMENT {
        int DepartmentId
        string Name
        string Location
    }

    PROJECT {
        int ProjectId
        string Name
        date StartDate
        date EndDate
    }

    EMPLOYEE_PROJECT {
        int EmployeeId
        int ProjectId
    }

    EMPLOYEE ||--o{ DEPARTMENT : belongs to
    DEPARTMENT ||--o{ EMPLOYEE : has
    EMPLOYEE ||--o{ EMPLOYEE_PROJECT : works on
    PROJECT ||--o{ EMPLOYEE_PROJECT : includes

Git hub repository name should be C113310-Employee-Management-System