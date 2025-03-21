# Employee Management System

A full-stack application using ASP.NET Core, Spring Boot, Angular, and React.

## Project Structure
```
Employee-Management-System/
├── backend/
│   ├── dotnet-api/       # ASP.NET Core Web API (Employee Management)
│   └── spring-api/       # Spring Boot API (Department & Project Management)
├── frontend/
│   ├── angular-app/      # Angular frontend
│   └── react-app/        # React frontend
└── database/            # Database scripts
    ├── mssql_setup.sql
    ├── mssql_sample_data.sql
    ├── mysql_setup.sql
    └── mysql_sample_data.sql
```

## Prerequisites
- .NET 8.0 SDK
- Java JDK 17
- Node.js & npm
- MSSQL Server (Server name: MAHESH)
- MySQL Server (Port: 3307, Password: aa803)
- Angular CLI
- Create React App

## Current Status
✅ Backend APIs:
- ASP.NET Core API (Employees) - Completed
- Spring Boot API (Departments & Projects) - Completed
- Database Setup - Completed

✅ Frontend:
- Angular App: Completed
- React App: Completed

## Next Steps
1. Angular Frontend:
   - Create components for Employees and Departments
   - Implement CRUD operations
   - Use Angular Material for UI

2. React Frontend:
   - Create components for Projects
   - Implement CRUD operations
   - Use Bootstrap/Tailwind CSS for UI

## Database Setup
1. MSSQL (Employee Database):
   - Connect to server "MAHESH"
   - Run `database/mssql_setup.sql`
   - Run `database/mssql_sample_data.sql`

2. MySQL (Department & Project Database):
   - Connect to localhost:3307 with password 'aa803'
   - Run `database/mysql_setup.sql`
   - Run `database/mysql_sample_data.sql`

## Backend Setup

### ASP.NET Core API
1. Open project in Visual Studio and Run
or
2. Navigate to backend/dotnet-api
3. Run the following commands:
   ```
   dotnet restore
   dotnet build
   dotnet run
   ```
after executing run command

4. API will be available at https://localhost:55115
5. Swagger UI available at https://localhost:55115/swagger

### Spring Boot API
1. Navigate to backend/spring-api
2. Run Maven commands:
   ```
   mvn clean install
   mvn spring-boot:run
   ```
3. API will be available at http://localhost:8081
4. Swagger UI available at http://localhost:8081/swagger-ui.html

## API Endpoints

### Employee API (ASP.NET Core)
- GET /api/Employee - Get all employees
- GET /api/Employee/{id} - Get employee by ID
- POST /api/Employee - Create new employee
- PUT /api/Employee/{id} - Update employee
- DELETE /api/Employee/{id} - Delete employee

### Department & Project API (Spring Boot)
- GET /api/departments - Get all departments
- POST /api/departments - Create department
- PUT /api/departments/{id} - Update department
- DELETE /api/departments/{id} - Delete department

- GET /api/projects - Get all projects
- POST /api/projects - Create project
- PUT /api/projects/{id} - Update project
- DELETE /api/projects/{id} - Delete project

## Frontend Applications

### Angular Frontend (Employee & Department Management)
1. Start the application:
   ```bash
   cd frontend/angular-app-c113310
   npm install
   ng serve
   # Application available at http://localhost:4200
   ```

2. Features:
   - Employee Management
     - List view with Material table
     - Create/Edit employee forms
     - Delete employee with confirmation
     - Department selection integration
   - Department Management
     - List view with Material table
     - Create/Edit department forms
     - Delete department with confirmation
   - Material Design UI
   - Responsive layout
   - Type-safe API integration

### React Frontend (Project Management)
1. Start the application:
   ```bash
   cd frontend/react-app-c113310
   npm install
   npm start
   # Application available at http://localhost:3000
   ```

2. Features:
   - Project Management
     - List all projects
     - Create new projects
     - Edit existing projects
     - Delete projects with confirmation
     - Date handling for start/end dates
   - Material-UI components
   - Responsive design
   - TypeScript integration

## Technology Stack
- Backend:
  - ASP.NET Core 8.0 with Entity Framework Core
  - Spring Boot 3.2.3 with Spring Data JPA
  - SQL Server & MySQL databases
- Frontend:
  - Angular 19 with Material UI
  - React 18 with Material-UI
  - TypeScript
  - RxJS (Angular)
  - Axios (React)

## Authors
- Mahesh Jayasuriya
- Student ID: C113310
- Date: March 2025
