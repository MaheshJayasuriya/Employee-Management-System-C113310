# Employee Management System
## Assignment Submission Document

### Student Information
- **Name:** Mahesh Jayasuriya
- **Student ID:** C113310
- **Date:** 20 March 2025
- **GitHub Repository:** https://github.com/[username]/C113310-Employee-Management-System

### Project Overview
A full-stack application implementing an Employee Management System using multiple modern frameworks and technologies.

### Technology Stack
1. Backend:
   - ASP.NET Core 8.0 (Employee Management)
   - Spring Boot 3.2.3 (Department & Project Management)
   - Entity Framework Core
   - Spring Data JPA
   - SQL Server & MySQL

2. Frontend:
   - Angular 19 with Material UI (Employee & Department modules)
   - React 18 with Material-UI (Project module)
   - TypeScript
   - RxJS & Axios

### Implementation Details

#### 1. Database Design
- **SQL Server Database (Employees)**
  - Tables: Employees, EmployeeProjects
  - Relationships: Employee-Department (Foreign Key)
  
- **MySQL Database (Departments & Projects)**
  - Tables: Department, Project
  - Schema: employee_management_db

#### 2. Backend Implementation
a) ASP.NET Core API
  - RESTful endpoints for Employee management
  - Entity Framework Core for data access
  - Input validation and error handling
  - CORS configuration

b) Spring Boot API
  - RESTful endpoints for Department & Project management
  - Spring Data JPA for data access
  - Global exception handling
  - Cross-origin support

#### 3. Frontend Implementation
a) Angular Application
  - Standalone components architecture
  - Lazy loading for optimized performance
  - Material Design components
  - Type-safe HTTP services
  - Reactive forms with validation

b) React Application
  - Function components with hooks
  - Material-UI integration
  - TypeScript for type safety
  - Axios for API communication
  - React Router for navigation

### Testing Instructions
1. Database Setup:
   ```bash
   # SQL Server
   sqlcmd -S MAHESH -i database/mssql_setup.sql
   sqlcmd -S MAHESH -i database/mssql_sample_data.sql

   # MySQL
   mysql -u root -p
   # Password: aa803
   source database/mysql_setup.sql
   source database/mysql_sample_data.sql
   ```

2. Backend Services:
   ```bash
   # ASP.NET Core API
   cd backend/dotnet-api
   dotnet run
   # Access at https://localhost:55115

   # Spring Boot API
   cd backend/spring-api
   mvn spring-boot:run
   # Access at http://localhost:8081
   ```

3. Frontend Applications:
   ```bash
   # Angular App
   cd frontend/angular-app-c113310
   npm install
   ng serve
   # Access at http://localhost:4200

   # React App
   cd frontend/react-app-c113310
   npm install
   npm start
   # Access at http://localhost:3000
   ```


